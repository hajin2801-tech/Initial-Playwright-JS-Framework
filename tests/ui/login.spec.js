const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const users = require('../../test-data/users.json');

test('Login successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});