const backpackAddToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]'
const cartBadge = '[data-test="shopping-cart-link"]'
const inventoryItems = '.inventory_item'

export default class ProductsPage {

  visit() {
    cy.visit('/inventory.html')
  }

  addBackpackToCart() {
    cy.get(backpackAddToCartBtn).click()
  }

  verifyBackpackInCart() {
    cy.get('.shopping_cart_badge').should('contain', '1')
  }

  goToCart() {
    cy.get(cartBadge).click()
  }

  getProductByName(productName) {
    return cy.contains('.inventory_item_name', productName)
  }

  addProductToCart(productName) {
    this.getProductByName(productName)
      .parents('.inventory_item')
      .find('button')
      .click()
  }
}
