const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'store/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 20000,
      waitForTimeout: 20000,
      waitForNavigation: 'networkidle',
    },
    "ChaiWrapper": {
      require: "codeceptjs-chai"
    },
    EmailGenerator: {
      require: './helpers/emailGenerator.js',
    },
    REST: {
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    },
    JSONResponse: {},
  },
  FileSystem: {},
  plugins: {
    tryTo: {
      enabled: true
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js',
    productPage: './pages/product.js',
    cartPage: './pages/cart.js',
    tryToHelper: './helpers/tryTo.js',
    priceConverter: './helpers/priceConverter.js',
    userData: './input/userData.js'
  },
  name: 'JS_apoet'
}