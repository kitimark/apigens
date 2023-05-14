import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export class OkxError<T = unknown, D = any> extends AxiosError<T, D> {
  constructor(
    message?: string,
    code?: string,
    config?: InternalAxiosRequestConfig<D>,
    request?: any,
    response?: AxiosResponse<T, D>,
  ) {
    super(message, code, config, request, response);
    this.name = 'OkxError';
  }
}
