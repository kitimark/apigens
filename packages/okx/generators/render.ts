import ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import groupBy from 'lodash/groupBy';
import functions from '../tmp/okx-methods';

const convertKebabCaseToCamelCase = (text: string) => {
  return text.replace(/-\w/g, text => text.replace(/-/, "").toUpperCase());
}

const convertKebabCaseToPascal = (text: string) => {
  return text.replace(/(^\w|-\w)/g, text => text.replace(/-/, "").toUpperCase());
}

const sanitizeHtml = (html: string) => {
  return html
    // remove \n
    .replace('\n', ' ')
    // senitize <br> at start and end of html
    .replace(/^(<br>)+|(<br>)+$/g, '')
    // convert <code> tag to `
    .replace(/(<code>)|(<\/code>)/g, '`')
    // split new line
    .split('<br>')
    // remove space at start and end of each line
    .map(line => line.replace(/^\s+|\s+$/g, ''));
}

const generateRefLink = (id: string) => {
  return 'https://www.okx.com/docs-v5/en/#' + id;
}

interface Param {
  name: string;
  type: string;
  required: boolean;
  description: string;
  param?: Param[];
}

const resolveParamType = (param: Param) => {
  if (param.type === 'String') {
    return 'string';
  } else if (param.type === 'Boolean'){
    return 'boolean';
  } else if (param.type === 'Array of string') {
    return 'string[]';
  } else if (param.type === 'Array of object') {
    // TODO: Resolve nested properties in object
    return 'any[]';
  } else if (param.type === 'Array') {
    return 'any[]';
  } else {
    return 'any';
  }
}

const convertParamLine = (param: Param) => {
  let text = param.name;
  if (!param.required) {
    text += '?';
  }
  text += ': ';
  text += resolveParamType(param);
  text += ';';
  return text;
}

const convertRequestParamInterfaceName = (name: string) => {
  return convertKebabCaseToPascal(name) + 'RequestParams';
}

const convertRequestParamArguments = (key: string, name: string) => {
  return convertKebabCaseToCamelCase(key) + '.' + convertRequestParamInterfaceName(name);
}

const convertResponse = (key: string, name: string) => {
  return convertKebabCaseToCamelCase(key) + '.' + convertKebabCaseToPascal(name) + 'Response';
}

const main = async () => {
  const groupFuncs = groupBy(functions, func => func.section);

  const interTemplate = `\
/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
export interface OkxResponse<Data = any> {
  code: string;
  msg: string;
  data: Data[];
}

<%_ Object.entries(groupFuncs).map(([key, functions]) => { _%>
export namespace <%= convertKebabCaseToCamelCase(key) %> {
  <%_ functions.forEach((func) => { _%>
  /*!
   * see: <%= generateRefLink(func.id) %>
   */
  export interface <%= convertRequestParamInterfaceName(func.name) %> {
    <%_ func.requestparams.forEach((param) => { _%>
    /*!
    <%_ sanitizeHtml(param.description).forEach(line => { _%>
     * <%= line %>
    <%_ }) _%>
     */
    <%= convertParamLine(param) %>

    <%_ }) _%>
  }

    <%_ if (func.responseArrayArranged) { _%>
  export type <%= convertKebabCaseToPascal(func.name) %>Data = [
      <%_ func.response.forEach((param) => { _%>
    /*!
        <%_ sanitizeHtml(param.description).forEach(line => { _%>
     * <%= line %>
        <%_ }) _%>
     */
    <%= resolveParamType(param) %>,

      <%_ }) _%>
  ]
    <%_ } else { _%>
  export type <%= convertKebabCaseToPascal(func.name) %>Data = {
      <%_ func.response.forEach((param) => { _%>
    /*!
        <%_ sanitizeHtml(param.description).forEach(line => { _%>
     * <%= line %>
        <%_ }) _%>
     */
    <%= convertParamLine(param) %>

      <%_ }) _%>
  }
    <%_ } _%>

  export type <%= convertKebabCaseToPascal(func.name) %>Response = OkxResponse<<%= convertKebabCaseToPascal(func.name) %>Data>;

  <%_ }) _%>
}
<%_ }) _%>`

  const inter = ejs.render(interTemplate, { 
    groupFuncs, 
    convertKebabCaseToCamelCase,
    convertKebabCaseToPascal, 
    sanitizeHtml, 
    convertParamLine,
    generateRefLink,
    convertRequestParamInterfaceName,
    resolveParamType,
  });
  fs.writeFileSync(path.join('src', 'api-core-types.ts'), inter);

  const apiTemplate = `\
/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
import { OkxAxiosInstance } from './rest-client-instance';
import { 
<%_ Object.keys(groupFuncs).forEach(key => { _%>
  <%= convertKebabCaseToCamelCase(key) %>,
<%_ }) _%>
} from './api-core-types'

<%_ Object.entries(groupFuncs).forEach(([key, functions]) => { _%>
export class <%= convertKebabCaseToPascal(key) %> {
  constructor(private readonly client: OkxAxiosInstance) {}

  <%_ functions.forEach((func) => { _%>
  /**
   * **<%= func.title %>**
   * 
    <%_ if (func.description) { _%>
      <%_ sanitizeHtml(func.description).forEach(line => { _%>
   * <%= line %>
      <%_ }) _%>
    <%_ } _%>
   * 
   * see: <%= generateRefLink(func.id) %>
   */
  async <%= convertKebabCaseToCamelCase(func.name) %>(args: <%= convertRequestParamArguments(key, func.name) %>) {
    <%_ if (func.httprequest.method === 'post') { _%>
    return this.client.post<<%= convertResponse(key, func.name) %>>('<%= func.httprequest.path %>', args)
      .then(res => res.data);
    <%_ } else if (func.httprequest.method === 'get') { _%>
    return this.client.get<<%= convertResponse(key, func.name) %>>('<%= func.httprequest.path %>', {
      params: args
    }).then(res => res.data);
    <%_ } _%>
  }

  <%_ }) _%>
}
<%_ }) _%>`

  const code = ejs.render(apiTemplate, { 
    groupFuncs, 
    convertKebabCaseToCamelCase,
    convertKebabCaseToPascal, 
    sanitizeHtml, 
    generateRefLink,
    convertRequestParamArguments,
    convertResponse,
  });
  fs.writeFileSync(path.join('src', 'api-core.ts'), code);

  const restClientTemplate = `\
/**
 * THIS IS GENERATED CODE. DO NOT EDIT.
 */
import { createOkxAxiosInstance, OkxAxiosInstance, OkxConfig } from './rest-client-instance';
import {
<%_ Object.keys(groupFuncs).forEach(key => { _%>
  <%= convertKebabCaseToPascal(key) %>,
<%_ }) _%>
} from './api-core';

export class OkxRestClient {
  private readonly client: OkxAxiosInstance;
<%_ Object.keys(groupFuncs).forEach(key => { _%>
  public readonly <%= convertKebabCaseToCamelCase(key) %>: <%= convertKebabCaseToPascal(key) %>;
<%_ }) _%>

  constructor(config: OkxConfig) {
    this.client = createOkxAxiosInstance(config);
<%_ Object.keys(groupFuncs).forEach(key => { _%>
    this.<%= convertKebabCaseToCamelCase(key) %> = new <%= convertKebabCaseToPascal(key) %>(this.client);
<%_ }) _%>
  } 
}
`
  const indexCode = ejs.render(restClientTemplate, {
    groupFuncs,
    convertKebabCaseToPascal,
    convertKebabCaseToCamelCase,
  })
  fs.writeFileSync(path.join('src', 'index.ts'), indexCode);
}

main();
