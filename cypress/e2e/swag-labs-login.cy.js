import LoginPage from '../integration/examples/model/pages/LoginPage'
import testdata from '../fixtures/testdata.json'

describe('End to End Ecommerce Validation', () => {
  const loginPage = new LoginPage()

  it('Login to Swag Labs', () => {
    cy.visit('https://www.saucedemo.com/')
    loginPage.login(testdata.username, testdata.password)
    cy.url().should('include', '/inventory.html')
  })
})