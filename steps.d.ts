/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type productPage = typeof import('./pages/product.js');
type cartPage = typeof import('./pages/cart.js');
type tryToHelper = typeof import('./helpers/tryTo.js');
type priceConverter = typeof import('./helpers/priceConverter.js');
type ChaiWrapper = import('codeceptjs-chai');
type EmailGenerator = import('./helpers/emailGenerator.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, productPage: productPage, cartPage: cartPage, tryToHelper: tryToHelper, priceConverter: priceConverter }
  interface Methods extends Playwright, ChaiWrapper, EmailGenerator, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<EmailGenerator>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
