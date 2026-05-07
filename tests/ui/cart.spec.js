const { test } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');

const users = require('../../test-data/users.json');

test('Add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

  await cartPage.verifyItemVisible();
});