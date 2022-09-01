const auth = require("../pages/auth");

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

let shippingPrice = 2;

Feature('store');

Before(({ I }) => {
    I.openStore();
});

xScenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.submitNewUserFields(user);
    myAccountPage.verifyMyAccountPage();
}).tag('auth');

xScenario('grab', async ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    let price = await I.grabTextFrom({css:'#our_price_display'});
    console.log(price);
}).tag('grab');

Scenario('buy product', async ({ I, homePage, authPage, productPage, cartPage}) => {
    homePage.clickSignIn();
    authPage.login('felinarien23@gmail.com', 'chrisevans2311');
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');

    let productPrice = await productPage.getProductPrice();
    let productPriceNumber = Number(productPrice.slice(1));
    console.log('productPriceNumber', productPriceNumber);

    productPage.clickAddToCart();
    productPage.proceedProduct();

    let totalPriceWithoutTax = await cartPage.getTotalPriceWithoutTax();
    let totalPriceWithoutTaxNumber = Number(totalPriceWithoutTax.slice(1));
    console.log('totalPriceWithoutTaxNumber', totalPriceWithoutTaxNumber);

    I.assertEqual(productPriceNumber + shippingPrice, totalPriceWithoutTaxNumber, 'Prices are not in match');

    cartPage.clickProceedToCheckoutSummary();
    cartPage.clickProceedToCheckoutAdress();
    cartPage.clickProceedToCheckoutShipping();
    cartPage.clickProceedToCheckoutPayment();
    cartPage.clickConfirmOrderButton();

    let order = await cartPage.getOrderId();
    console.log('order:', order);
}).tag('buy');

