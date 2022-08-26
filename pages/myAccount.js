const { I } = inject();

module.exports = {
  myAccountElement: {css: '#center_column'},
  myAccountText: 'MY ACCOUNT',


  verifyMyAccountPage() {
    I.waitForText(this.myAccountText);
    I.see(this.myAccountText);
  } 

}
