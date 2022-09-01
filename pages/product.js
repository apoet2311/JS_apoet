const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addProductToCartButton: "//button[@name='Submit']",
  proceedToCheckoutButton: "//a[@title='Proceed to checkout']",

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  clickAddToCart() {
    I.click(this.addProductToCartButton);
    I.waitForText('Product successfully added to your shopping cart');
    I.see('Product successfully added to your shopping cart');
  },

  proceedProduct() {
    I.click(this.proceedToCheckoutButton);
    I.waitForText(' Summary');
    I.see(' Summary');
  },

  // insert your locators and methods here
}
