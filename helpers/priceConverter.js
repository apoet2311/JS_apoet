const Helper = require('@codeceptjs/helper');

class PriceConverter extends Helper {

  async getNumericPrice(price) {
    return +price.slice(1);
  }

}

module.exports = PriceConverter;
