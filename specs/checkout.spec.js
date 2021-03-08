const loginSequence = require("../Pages/loginpage");

function logIn(loginFuncName) {
    loginSequence[loginFuncName]();
}


describe('The ability to checkout items added to the cart', () => {

    it('allows a standard user to checkout a single item that is in the cart', () => {
        logIn("loginAsStandardUser")

        cy.contains('ADD TO CART').click()
        cy.get('.fa-layers-counter.shopping_cart_badge').contains('1');         //Checks the cart contains 1 item

        cy.get('#shopping_cart_container > a').click()

        cy.url().should('include', 'https://www.saucedemo.com/cart.html')

        cy.get('[class="inventory_item_name"]').contains("Sauce Labs Backpack")

        cy.contains('CHECKOUT').click()

        cy.url().should('include', 'https://www.saucedemo.com/checkout-step-one.html')

        cy.get('input[id="first-name"]').type('Marlon')
        cy.get('input[id="last-name"]').type('Brando')
        cy.get('input[id="postal-code"]').type('AP79 1RE')

        cy.contains('CONTINUE').click()

        cy.url().should('include', 'https://www.saucedemo.com/checkout-step-two.html')

        cy.contains('FINISH').click()

        cy.url().should('include', 'https://www.saucedemo.com/checkout-complete.html')
    })
})