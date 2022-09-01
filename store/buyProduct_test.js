const FileReader = require('../helpers/fileReader.js');
let productLinks = FileReader.getData();

Feature('buy product');

Before(({ I, homePage, authPage }) => {
    I.openStore();    
    homePage.clickSignIn();
    authPage.login('felinarien23@gmail.com', 'chrisevans2311');
});

Data(productLinks).Scenario('buy product', async ({ I, productPage, cartPage, tryToHelper, current }) => {

    I.amOnPage(current.productLink);
    let productPriceNumber = await productPage.getProductPrice();
    await productPage.clickAddToCart();
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