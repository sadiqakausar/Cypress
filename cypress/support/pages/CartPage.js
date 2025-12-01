const checkoutBtn = '[data-test="checkout"]'
const continueShoppingBtn = '[data-test="continue-shopping"]'
const removeBtn = '[data-test="remove-sauce-labs-backpack"]'
const cartItems = '.cart_item'
const itemName = '.inventory_item_name'

export default class CartPage {

  visit() {
    cy.visit('/cart.html')
  }

  clickCheckout() {
    cy.get(checkoutBtn).click()
  }

  continueShopping() {
    cy.get(continueShoppingBtn).click()
  }

  removeBackpack() {
    cy.get(removeBtn).click()
  }

  verifyItemInCart(itemName) {
    cy.get(cartItems).should('contain', itemName)
  }

  verifyCartNotEmpty() {
    cy.get(cartItems).should('have.length.greaterThan', 0)
  }

  getCartItemsCount() {
    return cy.get(cartItems).its('length')
  }
}