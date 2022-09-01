const fs = require('fs');
const FILE_PATH = './input/productLinks.txt';

module.exports = {
  readContentFromFile(path) {
    try {
      return fs.readFileSync(path, 'utf8');
    } catch (err) {
      console.error(err);
    }
  },

  getArrayOfProductLinkObjects(string) {
    let array = string.split(/\r\n/);
    let objectsArray = [];
    for (const row of array) {
      objectsArray.push({ productLink: row.split(/\s/)[0] });
    }
    return objectsArray;
  },

  getData() {
    return this.getArrayOfProductLinkObjects(this.readContentFromFile(FILE_PATH));
  }
}
