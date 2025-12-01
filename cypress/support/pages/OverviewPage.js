const finishBtn = '[data-test="finish"]'
const cancelBtn = '[data-test="cancel"]'
const summaryInfo = '.summary_info'
const cartItems = '.cart_item'

export default class OverviewPage {

  visit() {
    cy.visit('/checkout-step-two.html')
  }

  clickFinish() {
    cy.get(finishBtn).click()
  }

  clickCancel() {
    cy.get(cancelBtn).click()
  }

  verifyOrderSummary() {
    cy.get(summaryInfo).should('be.visible')
    cy.get(cartItems).should('be.visible')
  }
}