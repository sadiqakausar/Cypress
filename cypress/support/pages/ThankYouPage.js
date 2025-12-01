const completeHeader = '.complete-header'
const completeText = '.complete-text'
const backHomeBtn = '[data-test="back-to-products"]'
const ponyExpressIcon = '.pony_express'

export default class ThankYouPage {

  visit() {
    cy.visit('/checkout-complete.html')
  }

  verifyOrderComplete() {
    cy.get(completeHeader).should('contain', 'Thank you for your order!')
    cy.get(completeText).should('be.visible')
    cy.get(ponyExpressIcon).should('be.visible')
  }

  clickBackHome() {
    cy.get(backHomeBtn).click()
  }

  verifyThankYouMessage() {
    cy.url().should('include', '/checkout-complete.html')
    this.verifyOrderComplete()
  }
}