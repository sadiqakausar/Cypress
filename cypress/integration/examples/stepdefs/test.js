import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";
import ProductsPage from "../../../support/pages/ProductsPage";
import CartPage from "../../../support/pages/CartPage";
import CheckoutPage from "../../../support/pages/CheckoutPage";
import OverviewPage from "../../../support/pages/OverviewPage";
import ThankYouPage from "../../../support/pages/ThankYouPage";
import testdata from "../../../fixtures/testdata.json";

const loginPage = new LoginPage()

Given('I am on Swag Labs Page', () => {
  cy.visit('/')
})

When('I login to the application with {string}', (userType) => {
  const userData = testdata[userType]
  if (userType === 'standard_user') {
    loginPage.loginSuccessful(userData.username, userData.password)
  } else {
    loginPage.loginWithError(userData.username, userData.password)
  }
})

When('I add item {string} to cart and checkout', (productName) => {
  const productsPage = new ProductsPage()
  const cartPage = new CartPage()
  
  productsPage.addProductToCart(productName)
  productsPage.goToCart()
  cartPage.verifyItemInCart(productName)
  cartPage.clickCheckout()
})

When('I provide my name and address details', () => {
  const checkoutPage = new CheckoutPage()
  checkoutPage.fillCheckoutInfo(testdata.standard_user.firstname, testdata.standard_user.lastname, testdata.standard_user.zipcode)
})

When('I see the overview and confirm', () => {
  const overviewPage = new OverviewPage()
  overviewPage.verifyOrderSummary()
  overviewPage.clickFinish()
})

Then('I see the thank you page', () => {
  const thankYouPage = new ThankYouPage()
  thankYouPage.verifyThankYouMessage()
})

Then('I see an error message', () => {
  loginPage.getErrorMessage()
})

When('I go to cart and checkout', () => {
  const productsPage = new ProductsPage()
  const cartPage = new CartPage()
  productsPage.goToCart()
  cartPage.clickCheckout()
})
