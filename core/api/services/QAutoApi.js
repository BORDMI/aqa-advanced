import { ApiClient } from '../ApiClient.js';
import env from '../../../env.json' with { type: 'json' };

const BASE_URL = env.QAUTO_BASE_URL;

export class QAutoApi extends ApiClient {
  constructor() {
    super(BASE_URL);
  }

  setSessionCookie(cookie) {
    this.client.defaults.headers.common['Cookie'] = cookie;
  }

  applySessionCookie(res) {
    const cookie = (res.headers?.['set-cookie'] ?? [])
      .find((c) => c.startsWith('sid='))?.split(';')[0];
    if (cookie) this.setSessionCookie(cookie);
  }

  clearSessionCookie() {
    delete this.client.defaults.headers.common['Cookie'];
  }

  async signUp(body) {
    const res = await this.post('/auth/signup', body);
    this.applySessionCookie(res);
    return res;
  }

  async signIn(body) {
    const res = await this.post('/auth/signin', body);
    this.applySessionCookie(res);
    return res;
  }

  logout() { return this.get('/auth/logout'); }

  deleteUser() { return this.delete('/users'); }

  getCars() { return this.get('/cars'); }
  
  addCar(body) { return this.post('/cars', body); }
  
  getCarById(id) { return this.get(`/cars/${id}`); }

  getExpenses(carId, page = 1, headers = {}) {
    return this.get('/expenses', { params: { carId, page }, headers });
  }
}
