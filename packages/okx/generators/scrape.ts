import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import * as path from 'path';

const main = async () => {
  const html = await fetch('https://www.okx.com/docs-v5/en')
    .then(res => res.text());
  
  const parser = new JSDOM(html);
  const elements = parser.window.document.querySelectorAll('*[id]');

  const restApiIds = Array.from(elements)
    .map(el => ({
      tag: el.tagName.toLowerCase(),
      id: el.id,
    }))
    .filter(el => /^rest-api-(.*)/g.test(el.id))
    .filter(el => !el.id.includes('authentication'))

  // grouping sections
  const sections = restApiIds
    .reduce<any[][]>((acc, el) => {
      if (el.tag === 'h2') {
        return [...acc, [el]]
      }
      acc[acc.length - 1].push(el)
      return acc;
    }, [])
    .reduce<any>((acc, el) => {
      const section = el.find((el) => el.tag === 'h2')!
      const contents = el.filter((el) => el.tag !== 'h2')
        .reduce<any[]>((acc, el) => {
          if (el.tag === 'h3') {
            return [...acc, [{ ...el, section: section.id }]]
          }
          // fix status section doesn't have h3
          if (!acc[acc.length - 1]) {
            return [...acc, [
              // { ...section, tag: 'h3', section: section.id, singleMethod: true },
              { tag: 'h3', id: /(.*)-rate-limit/.exec(el.id)![1], section: section.id, singleMethod: true },
              { ...el, section: section.id },
            ]];
          }
          acc[acc.length - 1].push({ ...el, section: section.id })
          return acc;
        }, [])
      
      return {
        ...acc,
        [section.id]: contents,
      }
    }, {})
  
  // gruping function contents
  const functionContents = Object.values<any[]>(sections).flatMap<any[]>(func => func);

  type Param = {
    name: string,
    type: string,
    description: string,
    params?: Param[],
  };
  type RequestParam = Param & {
    required: boolean,
    params?: RequestParam[],
  };
  type ResponseParam = Param;

  // TODO: Resolve recursive multiple nest
  const resolveNestedParams = <T extends Param>(raw: T[]): T[] => {
    const params = raw.reduce<T[]>((acc, p) => {
      if (p.name.startsWith('&gt; ')) {
        p.name = p.name.replace('&gt; ', '')
        if (acc[acc.length - 1].params) {
          acc[acc.length - 1].params!.push(p)
        } else {
          acc[acc.length - 1].params = [p]
        }
        return [...acc];
      }
    
      return [...acc, p];
    }, [])
    return params;
  }

  const getRequestParams = (id: string) => {
    if (!id) {
      return []
    }
    const rawHtml = parser.window.document.querySelector('#' + id)!
      .nextElementSibling!
      .querySelectorAll('tbody tr')

    const rawParams = Array.from(rawHtml).map<RequestParam>(el => {
      const detail = Array.from(el.children)
      return {
        name: detail[0].innerHTML,
        type: detail[1].innerHTML,
        required: detail[2].innerHTML === 'Yes',
        description: detail[3].innerHTML,
      }
    })
    
    return resolveNestedParams(rawParams);
  }

  const getResponseFromRows = (el: NodeListOf<HTMLTableRowElement>) => {
    const rawParams = Array.from(el).map<ResponseParam>(el => {
      const detail = Array.from(el.children)
      return {
        name: detail[0].innerHTML
          // fix rest-api-public-data-get-position-tiers-response-parameters has invalid name of param
          .replace(/\s+0$/, ''),
        type: detail[1].innerHTML,
        required: true,
        description: detail[2].innerHTML,
      }
    })
    return rawParams;
  }

  const getHttpRequest = (id: string) => {
    const code = parser.window.document
        .querySelector('#' + id)!
        .nextElementSibling!
        .querySelector('code')!
        .innerHTML!
    return {
      method: code.split(' ')[0].toLocaleLowerCase(),
      path: code.split(' ')[1],
    }
  }

  const functions = functionContents.map(ct => {
    const method = ct.find(e => e.tag === 'h3') as { tag: string, id: string, section: string, singleMethod?: boolean }
    const ratelimit = ct.find(e => /rate-limit/.test(e.id))
    const ratelimitrule = ct.find(e => /rate-limit-rule/.test(e.id))
    const httprequest = ct.find(e => /http-request/.test(e.id))
    const requestparams = ct.find(e => /request-parameters/.test(e.id))
    // Have 2 posibility of response id pattern 
    // - (.*)-response-parameters
    // - (.*)-response-example
    const responseparams = ct.find(e => /response/.test(e.id))

    const getTitle = () => {
      const el = parser.window.document
        .querySelector('#' + (method.singleMethod ? method.section : method.id))

      return el?.innerHTML;
    }

    const getDescription = () => {
      const el = parser.window.document
        .querySelector('#' + (method.singleMethod ? method.section : method.id))
        ?.nextElementSibling
      
      if (el?.tagName === 'P') {
        return el?.innerHTML;
      }
    }

    const getResponseParamsTable = () => {
      let el: Element;
      if (responseparams?.id) {
        el = parser.window.document.querySelector('#' + responseparams.id)!
          .nextElementSibling!
        if (el.tagName === 'TABLE') {
          return el as HTMLTableElement;
        }

        // Fix rest-api-funding-funds-transfer-response-parameters has blackquote before table
        el = parser.window.document.querySelector('#' + responseparams.id)!
          .nextElementSibling!
          .nextElementSibling!
        if (el.tagName === 'TABLE') {
          return el as HTMLTableElement;
        }
      } else {
        // Fix rest-api-funding-lightning-deposits response title missing
        el = parser.window.document.querySelector('#' + requestparams.id)!
          .nextElementSibling!
          .nextElementSibling!
          .nextElementSibling!
          .nextElementSibling!
          .nextElementSibling!
        if (el.tagName === 'TABLE') {
          return el as HTMLTableElement;
        }
      }
    }

    const getResponse = () => {
      const tableRows = getResponseParamsTable()
        ?.querySelectorAll<HTMLTableRowElement>('tbody tr');

      if (!tableRows) {
        throw new Error('Response table not found');
      }

      const rawParams = getResponseFromRows(tableRows);
      return resolveNestedParams(rawParams);
    }

    const getResponseArrayArranged = () => {
      const notice = getResponseParamsTable()?.nextElementSibling!
      if (notice.className === 'notice') {
        const contents = Array.from(notice.querySelectorAll('p'));
        return !!contents.find(c => c.innerHTML.includes('arranged in an array'))
      }
    }

    if (!requestparams) {
      console.log('no request params id:', method.id)
    }

    if (!responseparams) {
      console.log('no response params id:', method.id)
    }

    return {
      // fallback get status section
      id: method.singleMethod ? method.section : method.id,
      name: method.singleMethod ? 'get-status' : method.id.replace(method.section + '-', ''),
      title: getTitle(),
      section: method.section.replace('rest-api-', ''),
      description: getDescription(),
      ratelimitId: parser.window.document.querySelector('#' + ratelimit.id)?.innerHTML,
      ratelimitruleId: parser.window.document.querySelector('#' + ratelimitrule?.id)?.innerHTML,
      httprequest: getHttpRequest(httprequest.id),
      requestparams: getRequestParams(requestparams?.id),
      response: getResponse(),
      responseArrayArranged: getResponseArrayArranged(),
    }
  });

  const template = `\
export default ${JSON.stringify(functions, null, 2)} 
`
  fs.mkdirSync('tmp', { recursive: true })
  fs.writeFileSync(path.join('tmp', 'okx-methods.ts'), template)
}

main();
