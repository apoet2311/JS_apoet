const { I } = inject();

module.exports = {
  totalPriceWithoutTax: { css: '#total_price_without_tax' },
  proceedToCheckoutSummaryButton: { xpath: "//p/a[@title='Proceed to checkout']" },
  proceedToCheckoutAdressButton: { xpath: "//button[@name='processAddress']" },
  tofCheckBox: { xpath: "//input[@name='cgv']" },
  proceedToCheckoutShippingButton: { xpath: "//button[@name='processCarrier']" },
  proceedToPayButton: { xpath: "//a[@title='Pay by bank wire']" },
  confirmButton: { xpath: "//p/button[@type='submit']" },
  orderReferenceText: { xpath: "//div[@class='box']" },
  shippingText: {css: '#total_shipping'},
  adresses: 'Addresses',
  shipping:'SHIPPING',
  total: 'TOTAL',
  orderSummary: 'ORDER SUMMARY',
  orderComplete: 'Your order on My Store is complete.',

  async getTotalPriceWithoutTax() {
    let totalPriceWithoutTax = await I.grabTextFrom(this.totalPriceWithoutTax);
    return await Number(totalPriceWithoutTax.slice(1));
  },

  async getShippingPrice() {
    let shippingPrice = await I.grabTextFrom(this.shippingText);
    return await Number(shippingPrice.slice(1));
  },

  clickProceedToCheckoutSummary() {
    I.click(this.proceedToCheckoutSummaryButton);
    I.waitForText(this.adresses);
    I.see(this.adresses);
  },

  clickProceedToCheckoutAdress() {
    I.click(this.proceedToCheckoutAdressButton);
    I.waitForText(this.shipping);
    I.see(this.shipping);
  },

  clickProceedToCheckoutShipping() {
    I.click(this.tofCheckBox);
    I.click(this.proceedToCheckoutShippingButton);
    I.waitForText(this.total);
    I.see(this.total);
  },

  clickProceedToCheckoutPayment() {
    I.click(this.proceedToPayButton);
    I.waitForText(this.orderSummary);
    I.see(this.orderSummary);
  },

  clickConfirmOrderButton() {
    I.click(this.confirmButton);
    I.waitForText(this.orderComplete);
    I.see(this.orderComplete);
  },

  async getOrderId() {
    let orderReferenceText = await I.grabTextFrom(this.orderReferenceText);
    let orderId = orderReferenceText.split("reference")[1].substring(0, 10);
    return orderId;
  },
}
