const { I } = inject();
const tryTo = codeceptjs.container.plugins('tryTo');

module.exports = {
  async checkElementIsVisible(locator) {
    return await tryTo(() => I.seeElement(locator));
  } 
}