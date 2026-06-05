import { jest } from '@jest/globals';
import { QAutoApi } from '../core/api/services/QAutoApi.js';

const api = new QAutoApi();

describe('Mocking Axios in Jest', () => {
  describe('Successful mocked requests', () => {
    test('should return mocked userId on POST /auth/signin', async () => {
      const postSpy = jest.spyOn(api.client, 'post').mockResolvedValueOnce({
        status: 200,
        data: { status: 'ok', data: { userId: 42 } },
      });

      const res = await api.signIn({ email: 'user@test.com', password: 'Test1234!' });

      expect(res.status).toBe(200);
      expect(res.data.data.userId).toBe(42);
      expect(postSpy).toHaveBeenCalledTimes(1);
    });

    test('should return mocked cars list on GET /cars', async () => {
      const mockedCars = [
        { id: 1, carBrandId: 1, carModelId: 1, mileage: 100, brand: 'Audi', model: 'TT' },
      ];
      const getSpy = jest.spyOn(api.client, 'get').mockResolvedValueOnce({
        status: 200,
        data: { status: 'ok', data: mockedCars },
      });

      const res = await api.getCars();

      expect(res.status).toBe(200);
      expect(res.data.data).toEqual(mockedCars);
      expect(getSpy.mock.calls[0][0]).toBe('/cars');
    });

    test('should return mocked created car on POST /cars', async () => {
      const payload = { carBrandId: 2, carModelId: 6, mileage: 500 };
      const postSpy = jest.spyOn(api.client, 'post').mockResolvedValueOnce({
        status: 201,
        data: { status: 'ok', data: { id: 99, brand: 'BMW', model: '3', ...payload } },
      });

      const res = await api.addCar(payload);

      expect(res.status).toBe(201);
      expect(res.data.data).toMatchObject({ id: 99, brand: 'BMW', model: '3' });
      expect(postSpy.mock.calls[0][0]).toBe('/cars');
      expect(postSpy.mock.calls[0][1]).toEqual(payload);
    });
  });

  describe('Failed mocked requests', () => {
    test('should throw 400 on POST /auth/signin with wrong credentials', async () => {
      const error = Object.assign(new Error('Request failed with status code 400'), {
        response: { status: 400, data: { status: 'error', message: 'Wrong email or password' } },
      });
      jest.spyOn(api.client, 'post').mockRejectedValueOnce(error);

      await expect(
        api.signIn({ email: 'wrong@test.com', password: 'BadPass1!' }),
      ).rejects.toMatchObject({
        response: { status: 400, data: { message: 'Wrong email or password' } },
      });
    });

    test('should throw 401 on GET /cars without a valid session', async () => {
      const error = Object.assign(new Error('Request failed with status code 401'), {
        response: { status: 401, data: { status: 'error', message: 'Not authenticated' } },
      });
      jest.spyOn(api.client, 'get').mockRejectedValueOnce(error);

      await expect(api.getCars()).rejects.toMatchObject({
        response: { status: 401, data: { status: 'error' } },
      });
    });

    test('should throw 404 on GET /cars/:id when the car does not exist', async () => {
      const error = Object.assign(new Error('Request failed with status code 404'), {
        response: { status: 404, data: { status: 'error', message: 'Car not found' } },
      });
      jest.spyOn(api.client, 'get').mockRejectedValueOnce(error);

      await expect(api.getCarById(999999)).rejects.toMatchObject({
        response: { status: 404 },
      });
    });
  });
});
