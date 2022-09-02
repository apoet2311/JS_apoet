const { I } = inject();

module.exports = {
  async getNumericPrice(price) {
    return +price.slice(1);
  },

  async getPriceInUAH(price) {
    let response = await I.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
    I.seeResponseCodeIs(200);
    let rate = response.data[0].rate;
    return price * rate;
  }
}
