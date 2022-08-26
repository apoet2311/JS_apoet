const { I } = inject();

module.exports = {


  myAccount() {
    I.waitForVisible({css: '#center_column'});
    I.see('MY ACCOUNT');
  } 

}
