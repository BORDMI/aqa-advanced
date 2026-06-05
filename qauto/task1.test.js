import { faker } from '@faker-js/faker';
import { QAutoApi } from '../core/api/services/QAutoApi.js';
import { QAutoUser } from './helpers/QAutoUser.js';

const api = new QAutoApi();

describe('Error Handling', () => {
  describe('POST /auth/signin with invalid credentials', () => {
    test('should reject with HTTP 400 and an error message', async () => {
      await expect(
        api.signIn({ email: faker.internet.email(), password: faker.internet.password() }),
      ).rejects.toMatchObject({
        response: {
          status: 400,
          data: { status: 'error', message: 'Wrong email or password' },
        },
      });
    });
  });

  describe('GET /cars/:id with a non-existent id', () => {
    const user = new QAutoUser();

    beforeAll(() => user.registerViaApi(api));
    afterAll(() => user.deleteViaApi(api));

    test('should throw an error for a non-existent car id', async () => {
      await expect(api.getCarById(1)).rejects.toMatchObject({
        response: {
          status: 404,
          data: { status: 'error', message: 'Car not found' },
        },
      });
    });
  });
});
