import { Given, When, Then, Before, After, BeforeEach, AfterEach } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";
import ProductsPage from "../../../support/pages/ProductsPage";
import CartPage from "../../../support/pages/CartPage";
import CheckoutPage from "../../../support/pages/CheckoutPage";
import OverviewPage from "../../../support/pages/OverviewPage";
import ThankYouPage from "../../../support/pages/ThankYouPage";
import testdata from "../../../fixtures/testdata.json";

const loginPage = new LoginPage();
const productsPage = new ProductsPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()
const overviewPage = new OverviewPage()
const thankYouPage = new ThankYouPage()

Given('I am on Swag Labs Page', () => {
  cy.visit('/')
})

When('I login to the application', () => {
  loginPage.login(testdata.username, testdata.password)
})

When('I add items to cart and checkout', () => {  
  productsPage.addBackpackToCart()
  productsPage.verifyBackpackInCart()
  productsPage.goToCart()
  cartPage.verifyItemInCart('Sauce Labs Backpack')
  cartPage.clickCheckout()
})

When('I provide my name and address details', () => {
  checkoutPage.fillCheckoutInfo(testdata.firstname, testdata.lastname, testdata.zipcode)
})
When('I see the overview and confirm', () => {
  overviewPage.verifyOrderSummary()
  overviewPage.clickFinish()
})
Then('I see the thank you page', () => {
  thankYouPage.verifyThankYouMessage()
})
