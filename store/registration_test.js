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

Scenario('custom helper', async ({ I, tryToHelper }) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product#/size-s/color-orange');
    let result = await tryToHelper.checkElementIsVisible({ id: 'add_to_cart' });
    console.log(result);
    if (result) {
        I.click({ id: 'add_to_cart' })
    } else {
        console.error('Add to cart is not available');
    }
}).tag('helper');