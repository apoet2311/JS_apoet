Feature('store');

Before(({ I }) => {
    I.openStore();
});

Scenario('auth', async ({ I, homePage, authPage, createAccountPage, myAccountPage, userData }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(await I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.submitNewUserFields(userData.user);
    myAccountPage.verifyMyAccountPage();
}).tag('auth');
