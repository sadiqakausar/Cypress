const firstNameInput = '[data-test="firstName"]'
const lastNameInput = '[data-test="lastName"]'
const postalCodeInput = '[data-test="postalCode"]'
const continueBtn = '[data-test="continue"]'
const cancelBtn = '[data-test="cancel"]'
const errorMessage = '[data-test="error"]'

export default class CheckoutPage {

  visit() {
    cy.visit('/checkout-step-one.html')
  }

  enterFirstName(firstName) {
    cy.get(firstNameInput).type(firstName)
  }

  enterLastName(lastName) {
    cy.get(lastNameInput).type(lastName)
  }

  enterPostalCode(postalCode) {
    cy.get(postalCodeInput).type(postalCode)
  }

  clickContinue() {
    cy.get(continueBtn).click()
  }

  clickCancel() {
    cy.get(cancelBtn).click()
  }

  fillCheckoutInfo(firstName, lastName, postalCode) {
    this.enterFirstName(firstName)
    this.enterLastName(lastName)
    this.enterPostalCode(postalCode)
    this.clickContinue()
  }

  verifyErrorMessage() {
    cy.get(errorMessage).should('be.visible')
  }
}