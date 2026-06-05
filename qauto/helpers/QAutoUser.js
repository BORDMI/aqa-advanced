import { faker } from '@faker-js/faker';

export class QAutoUser {
  constructor() {
    const password = faker.internet.password();
    this.credentials = {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password,
      repeatPassword: password,
    };
  }

  async registerViaApi(api) {
    return api.signUp(this.credentials);
  }

  async deleteViaApi(api) {
    return api.deleteUser();
  }
}
