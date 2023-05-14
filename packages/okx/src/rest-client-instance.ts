import axios, { AxiosInstance } from 'axios';
import { InternalAxiosRequestConfig } from 'axios';
import * as querystring from 'querystring';
import { createHmac } from 'crypto';
import { AxiosResponse } from 'axios';
import { OkxResponse } from './api-core-types';
import { OkxError } from './api-error';

export interface OkxConfig {
  demo?: boolean;
  url?: string;  
  apiKey: string;
  secretKey: string;
  passphrase: string;
}

export type OkxAxiosInstance = AxiosInstance;

export const createOkxAxiosInstance = (config: OkxConfig): OkxAxiosInstance => {
  const client = axios.create({
    baseURL: config.url ?? 'https://www.okx.com/',
  })

  /**
   * Sign request for call okx api service
   * ref: https://www.okx.com/docs-v5/en/#rest-api-authentication
   *
   * @param request
   * @returns request with credential headers
   */
  const generateCredentials = (request: InternalAxiosRequestConfig<any>) => {
    /**
     * Create signature for call okx api service
     * ref: https://www.okx.com/docs-v5/en/#rest-api-authentication-signature
     * @param request
     * @returns Signature and timestamp
     */
    const createSignature = (request: InternalAxiosRequestConfig<any>) => {
      const date = new Date();
      const isoDate = date.toISOString();

      let data = isoDate + request.method!.toUpperCase() + request.url;
      if (request.params) {
        data = data + '?' + querystring.stringify(request.params);
      }
      if (request.data) {
        data = data + JSON.stringify(request.data);
      }
      const hmac = createHmac('sha256', config.secretKey);
      hmac.update(data);

      return {
        timestamp: isoDate,
        signature: hmac.digest('base64'),
      };
    };
    const { timestamp, signature } = createSignature(request);

    request.headers.set('OK-ACCESS-KEY', config.apiKey);
    request.headers.set('OK-ACCESS-PASSPHRASE', config.passphrase);
    request.headers.set('OK-ACCESS-SIGN', signature);
    request.headers.set('OK-ACCESS-TIMESTAMP', timestamp);

    /**
     * Check env for return is this demo account.
     * ref: https://www.okx.com/docs-v5/en/#overview-demo-trading-services
     * @returns return true, if okx demo account
     */
    if (config.demo) {
      request.headers.set('x-simulated-trading', 1);
    }

    return request;
  };
  client.interceptors.request.use(generateCredentials);

  /**
   * Error handler for okx api service
   * ref: https://www.okx.com/docs-v5/en/#error-code
   */
  const errorHandler = (response: AxiosResponse<OkxResponse<any>>) => {
    if (!['0', '2'].includes(response.data.code)) {
      throw new OkxError(
        response.data.msg,
        response.data.code,
        response.config,
        response.request,
        response,
      );
    }
    return response;
  }
  client.defaults.validateStatus = (status) => {
    return status < 500;
  }
  client.interceptors.response.use(errorHandler);

  return client;
}
