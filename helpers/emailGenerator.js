const Helper = require('@codeceptjs/helper');

class EmailGenerator extends Helper {

  getRandomEmail() {
    return Date.now() + '@test.com';
  }

}

module.exports = EmailGenerator;
