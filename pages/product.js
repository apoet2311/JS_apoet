const { I, tryToHelper } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addProductToCartButton: "//button[@name='Submit']",
  proceedToCheckoutButton: "//a[@title='Proceed to checkout']",
  productAdded: 'Product successfully added to your shopping cart',
  summary: ' Summary',

  async getProductPrice() {
    let result = await tryToHelper.checkElementIsVisible(this.addProductToCartButton);
    if (result) {
      let productPriceString = await I.grabTextFrom(this.productPrice);
      return Number(productPriceString.slice(1));
    } else {
      console.error('Add to cart is not available');
    }
  },

  async clickAddToCart() {
    I.click(this.addProductToCartButton);
    I.waitForText(this.productAdded);
    I.see(this.productAdded);
  },

  proceedProduct() {
    I.click(this.proceedToCheckoutButton);
    I.waitForText(this.summary);
    I.see(this.summary);
  },
}
