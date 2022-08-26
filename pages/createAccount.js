const { I } = inject();

module.exports = {
  firstNameInput: {css: '#customer_firstname'},
  stateDropdown: {css: '#id_state'},
  lastNameInput: {css: '#customer_lastname'},
  passwordInput: {css: '#passwd'},
  addressInput: {css: '#address1'},
  genderRadioButton: {css: '#id_gender1'},
  cityInput: {css: '#city'},
  zipCodeInput: {css: '#postcode'},
  mobilePhoneInput: {css: '#phone_mobile'},
  submitAccountButton: {css: '#submitAccount'},

  submitNewUserFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.click(this.genderRadioButton);
    I.click(this.stateDropdown);
    I.selectOption(this.stateDropdown, user.state);
    I.waitForVisible(this.lastNameInput);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.zipCodeInput, user.zipCode);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    I.click(this.submitAccountButton);
  }
}
