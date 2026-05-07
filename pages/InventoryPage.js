class InventoryPage {

  constructor(page) {
    this.page = page;
    this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  async addBackpackToCart() {
    await this.page.click(this.addBackpackButton);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = InventoryPage;