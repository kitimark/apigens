import { AxiosResponse } from 'axios';
import { OkxAxiosInstance, createOkxAxiosInstance } from './rest-client-instance';
import { OkxResponse } from './api-core-types';
import { OkxError } from './api-error';

describe('rest-client-instance', () => {
  let api: OkxAxiosInstance;
  let mockAdapter = jest.fn();

  beforeAll(() => {
    api = createOkxAxiosInstance({
      apiKey: 'test-api-key',
      secretKey: 'test-secret-key',
      passphrase: 'test-passpharse',
    });

    api.defaults.adapter = mockAdapter;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signature', () => {
    test('request get', async () => {
      jest.useFakeTimers({
        now: new Date(0),
      });
      mockAdapter.mockResolvedValue(<AxiosResponse<OkxResponse>>{
        data: {
          code: '0',
          msg: '',
          data: <any>[],
        },
      });

      await api.get('/test-api');

      expect(mockAdapter).toHaveBeenCalledTimes(1);
      expect(mockAdapter.mock.lastCall[0].headers).toMatchSnapshot();
    });

    test('request get with querystring', async () => {
      jest.useFakeTimers({ now: 0 });
      mockAdapter.mockResolvedValue(<AxiosResponse<OkxResponse>>{
        data: {
          code: '0',
          msg: '',
          data: <any>[],
        },
      });

      await api.get('/test-api', {
        params: {
          param1: 'value',
        },
      });

      expect(mockAdapter).toHaveBeenCalledTimes(1);
      expect(mockAdapter.mock.lastCall[0].headers).toMatchSnapshot();
    });

    test('request post', async () => {
      jest.useFakeTimers({ now: 0 });
      mockAdapter.mockResolvedValue(<AxiosResponse<OkxResponse>>{
        data: {
          code: '0',
          msg: '',
          data: <any>[],
        },
      });

      await api.post('/test-api', {
        param1: 'value'
      });

      expect(mockAdapter).toHaveBeenCalledTimes(1);
      expect(mockAdapter.mock.lastCall[0].headers).toMatchSnapshot();
    });
  });

  describe('error handler', () => {
    test.each(['0', '2'])('succes with %s code', async (code) => {
      mockAdapter.mockResolvedValue(<AxiosResponse<OkxResponse>>{
        data: {
          code,
          msg: '',
          data: <any>[]
        }
      });

      await api.get('/');

      expect(mockAdapter).toHaveBeenCalledTimes(1);
    });

    test.each(['1', '50000', '50001'])('error with %s code', async (code) => {
      mockAdapter.mockResolvedValue(<AxiosResponse<OkxResponse>>{
        data: {
          code,
          msg: '',
          data: <any>[]
        }
      });

      expect(api.get('/')).rejects.toThrowError(OkxError);
    })
  });
});
