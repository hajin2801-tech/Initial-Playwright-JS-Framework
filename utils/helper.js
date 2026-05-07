const { faker } = require('@faker-js/faker');

function generateRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
  };
}

module.exports = {
  generateRandomUser
};