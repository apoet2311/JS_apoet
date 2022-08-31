const { I } = inject();

module.exports = {
  registerEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  emailInput: { css: '#email' },
  passwordInput: { css: '#passwd' }, // Alt + Shif +F - make code cleaner
  signInButton: { css: '#SubmitLogin' },

  fillRegistrationEmail(email) {
    I.waitForVisible(this.registerEmailInput);
    I.fillField(this.registerEmailInput, email);
  },

  _waitForPageLoad() {
    I.waitForVisible(this.registerEmailInput);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  login(email, password) {
    this._waitForPageLoad();
    this._fillEmail(email);
    this._fillPassword(password);
    this._clickSignIn();
    I.waitForText('My account');
    I.see('My account');
  },

  _fillEmail(email) {
    I.fillField(this.emailInput, email);
  },

  _fillPassword(password) {
    I.fillField(this.passwordInput, password);
  },

  _clickSignIn() {
    I.click(this.signInButton);
  }
} 
