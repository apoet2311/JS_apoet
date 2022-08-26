let user = {
    firstName: 'Anton',
    state: 'Florida',
    lastName: 'Kozyrev',
    address: '2701 Sandy Ford',
    city: 'Ford',
    zipCode: '32011',
    mobilePhone: '+169852147375',
    password: '987456',
}

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.submitNewUserFields(user);
    myAccountPage.myAccount();
}).tag('auth');


xScenario('grab', async ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    let price = await I.grabTextFrom({css:'#our_price_display'});
    console.log(price);
}).tag('grab');