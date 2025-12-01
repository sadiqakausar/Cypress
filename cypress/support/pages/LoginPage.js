const userNameSelector = '[data-test="username"]'
const passwordSelector = '[data-test="password"]'
const submitBtnSelector = '[data-test="login-button"]'
const errorMessageSelector = '[data-test="error"]'

export default class LoginPage {

  visit() {
    cy.visit('/')
  }

  enterUsername(username) {
    cy.get(userNameSelector).type(username);
  }

  enterPassword(password) {
    cy.get(passwordSelector).type(password);
  }

  clickLogin() {
    cy.get(submitBtnSelector).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  loginSuccessful(username, password) {
    this.login(username, password);
    cy.url().should('include', '/inventory.html')
  }

  loginWithError(username, password) {
    this.login(username, password);
    this.getErrorMessage().should('be.visible')
      .and('contain.text', 'Epic sadface:')
  }

  getErrorMessage() {
    return cy.get(errorMessageSelector);
  }
}
