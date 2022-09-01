const { I } = inject();

module.exports = {
  totalPriceWithoutTax: { css: '#total_price_without_tax' },
  proceedToCheckoutSummaryButton: "//p/a[@title='Proceed to checkout']",
  proceedToCheckoutAdressButton: "//button[@name='processAddress']",
  tofCheckBox: "//input[@name='cgv']",
  proceedToCheckoutShippingButton: "//button[@name='processCarrier']",
  proceedToPayButton: "//a[@title='Pay by bank wire']",
  confirmButton: "//p/button[@type='submit']",
  orderReferenceText: "//div[@class='box']",
  // insert your locators and methods here

  async getTotalPriceWithoutTax() {
    return await I.grabTextFrom(this.totalPriceWithoutTax);
  },

  clickProceedToCheckoutSummary() {
    I.click(this.proceedToCheckoutSummaryButton);
    I.waitForText('Addresses');
    I.see('Addresses');
  },

  clickProceedToCheckoutAdress() {
    I.click(this.proceedToCheckoutAdressButton);
    I.waitForText('SHIPPING');
    I.see('SHIPPING');
  },

  clickProceedToCheckoutShipping() {
    I.click(this.tofCheckBox);
    I.click(this.proceedToCheckoutShippingButton);
    I.waitForText('TOTAL');
    I.see('TOTAL');
  },

  clickProceedToCheckoutPayment() {
    I.click(this.proceedToPayButton);
    I.waitForText('ORDER SUMMARY');
    I.see('ORDER SUMMARY');
  },

  clickConfirmOrderButton() {
    I.click(this.confirmButton);
    I.waitForText('Your order on My Store is complete.');
    I.see('Your order on My Store is complete.');
  },

  async getOrderId() {
    let orderReferenceText = await I.grabTextFrom(this.orderReferenceText);
    let orderId = orderReferenceText.split("reference")[1].substring(0, 10);
    return orderId;
  }

  /*- Do not forget to insert your order reference GNCNFOPMQ in the subject of your bank wire.*/
}
