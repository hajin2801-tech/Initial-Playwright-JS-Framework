class CartPage {

  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
  }

  async verifyItemVisible() {
    await this.page.waitForSelector(this.cartItem);
  }
}

module.exports = CartPage;