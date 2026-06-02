import axios from 'axios';

export class ApiClient {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
    this._setupInterceptors();
  }

  _setupInterceptors() {
    this.client.interceptors.request.use((config) => {
      const method = config.method.toUpperCase();

      console.log(`\n→ [REQUEST]  ${method} ${config.baseURL}${config.url}`);
      if (config.data) console.log(`  Body: ${JSON.stringify(config.data)}`);
      return config;
    });

    this.client.interceptors.response.use(
      (response) => {
        console.log(`← [RESPONSE] ${response.status} ${response.statusText} ${JSON.stringify(response.data)}`);
        return response;
      },
      (error) => {
        const status = error.response?.status ?? 'network error';
        console.error(`← [ERROR] ${status}`);
        return Promise.reject(error);
      },
    );
  }

  get(url, config) {
    return this.client.get(url, config);
  }

  post(url, data, config) {
    return this.client.post(url, data, config);
  }

  put(url, data, config) {
    return this.client.put(url, data, config);
  }

  patch(url, data, config) {
    return this.client.patch(url, data, config);
  }

  delete(url, config) {
    return this.client.delete(url, config);
  }
}
