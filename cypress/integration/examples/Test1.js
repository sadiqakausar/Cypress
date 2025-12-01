describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Another test',()=>{
     cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})

describe('My First Test', () => {
  it('finds the content "type"', () => {
   
    cy.prompt(
  [
    'visit https://cloud.cypress.io/login',
    'type "user@example.com" in the email field',
    'type {{password}} in the password field',
    'click the login button',
    'verify we are redirected to the dashboard',
  ],
  {
    placeholders: { password: 'secret123' },
  }
)
  })
  
})

// Generate the test
