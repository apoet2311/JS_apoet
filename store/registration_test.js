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

Before(({ I }) => {
    I.openStore();
});

Scenario('auth', async ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(await I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.submitNewUserFields(user);
    myAccountPage.verifyMyAccountPage();
}).tag('auth');
