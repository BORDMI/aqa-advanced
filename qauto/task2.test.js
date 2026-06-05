import { faker } from '@faker-js/faker';
import { QAutoApi } from '../core/api/services/QAutoApi.js';
import { QAutoUser } from './helpers/QAutoUser.js';

describe('Request Headers and Params', () => {
  const api = new QAutoApi();
  const user = new QAutoUser();
  let carId;

  beforeAll(async () => {
    await user.registerViaApi(api);
    const carRes = await api.addCar({
      carBrandId: 1,
      carModelId: 1,
      mileage: faker.number.int({ min: 0, max: 999999 }),
    });
    carId = carRes.data.data.id;
  });

  afterAll(() => user.deleteViaApi(api));

  test('should include custom headers and params in the request', async () => {
    const customHeaders = { 'X-Custom-Header': 'test-value' };
    let capturedConfig;

    const interceptorId = api.client.interceptors.request.use((config) => {
      capturedConfig = config;
      return config;
    });

    await api.getExpenses(carId, 1, customHeaders);

    expect(capturedConfig.url).toBe('/expenses');
    expect(capturedConfig.headers['X-Custom-Header']).toBe('test-value');
    expect(capturedConfig.params).toEqual({ carId, page: 1 });

    api.client.interceptors.request.eject(interceptorId);
  });
});
