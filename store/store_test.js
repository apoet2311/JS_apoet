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

Scenario('auth', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.submitNewUserFields(user);
    myAccountPage.verifyMyAccountPage();
}).tag('auth');

Scenario('buy product', async ({ I, homePage, authPage, productPage, cartPage}) => {
    homePage.clickSignIn();
    authPage.login('felinarien23@gmail.com', 'chrisevans2311');
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');

    let productPriceNumber = await productPage.getProductPrice();
    console.log('productPriceNumber', productPriceNumber);

    productPage.clickAddToCart();
    productPage.proceedProduct();

    let totalPriceWithoutTaxNumber = await cartPage.getTotalPriceWithoutTax();
    let shippingPrice = await cartPage.getShippingPrice();
    console.log('totalPriceWithoutTaxNumber', totalPriceWithoutTaxNumber);
    console.log('shippingPrice', shippingPrice);

    I.assertEqual(productPriceNumber + shippingPrice, totalPriceWithoutTaxNumber, 'Prices are not in match');

    cartPage.clickProceedToCheckoutSummary();
    cartPage.clickProceedToCheckoutAdress();
    cartPage.clickProceedToCheckoutShipping();
    cartPage.clickProceedToCheckoutPayment();
    cartPage.clickConfirmOrderButton();

    let order = await cartPage.getOrderId();
    console.log('order:', order);
}).tag('buy');

