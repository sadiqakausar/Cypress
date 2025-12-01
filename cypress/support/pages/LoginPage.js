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
    cy.url().should('include', '/inventory.html')
  }

  getErrorMessage() {
    return cy.get(errorMessageSelector);
  }
}
