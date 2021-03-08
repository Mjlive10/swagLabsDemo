const loginSequence = require("../Pages/loginpage");
const azText = "Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)";
const zaText = "Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack";
const lohiText = "Sauce Labs OnesieSauce Labs Bike LightSauce Labs Bolt T-ShirtTest.allTheThings() T-Shirt (Red)Sauce Labs BackpackSauce Labs Fleece Jacket";
const hiloText = "Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack";

function logIn(loginFuncName) {
    loginSequence[loginFuncName]();
}

function checkazFilter() {
    cy.get('[class="product_sort_container"]').should("have.value", "az")        //Check the filter is set to az by default
    //Check the order of the inventory is a to z
    cy.get('[class="inventory_item_name"]').should("have.text", azText)
}

function checkzaFilter() {
    cy.get('[class="product_sort_container"]').select('za');                    //Change filter to za
    cy.get('[class="product_sort_container"]').should("have.value", "za")        //Confirm filter has changed to za
    //Check that the inventory now runs from z to a
    cy.get('[class="inventory_item_name"]').should("have.text", zaText)
}

function checklohiFilter() {
    cy.get('[class="product_sort_container"]').select('lohi');                    //Change filter to low to high
    cy.get('[class="product_sort_container"]').should("have.value", "lohi")        //Check the filter is set to lohi
    //Check the order of the inventory is low to high price
    cy.get('[class="inventory_item_name"]').should("have.text", lohiText)
}

function checkhiloFilter() {
    cy.get('[class="product_sort_container"]').select('za');                    //Change filter to high to low
    cy.get('[class="product_sort_container"]').should("have.value", "za")        //Confirm filter is set to hilo
    //Check the order of the inventory is high to low price
    cy.get('[class="inventory_item_name"]').should("have.text", hiloText)
}

function checkBrokenzaFilter() {
    cy.get('[class="product_sort_container"]').select('za');                    //Change filter to za
    cy.get('[class="product_sort_container"]').should("have.value", "za")        //Confirm filter has changed to za
    //Check that the inventory now runs from z to a
    cy.get('[class="inventory_item_name"]').should("have.text", azText)         //Confirms the order of items has not changed from default
}

describe('The ability to view, filter and select/remove items with only approved credentials', () => {

    it('allows a standard user to filter the items', () => {
        logIn("loginAsStandardUser")
        checkazFilter()     //Check the default az filter
        checkzaFilter()     //Check that the inventory now runs z to a
        checklohiFilter()   //Check that the inventory now runs from low to high
        checkhiloFilter()   //Check that the inventory now runs high to low
    })

    it('does not allow a problem user to view or use the inventory page filter correctly', () => {
        logIn("loginAsProblemUser")
        checkazFilter()
        checkBrokenzaFilter()     // Check the problem user cannot change the order with the filter
    })

    it('allows a standard user to add and remove items to the cart from the inventory page', () => {
        logIn("loginAsStandardUser")

        cy.get('.fa-layers-counter.shopping_cart_badge').should('not.exist');       //Checks the default empty basket

        cy.contains('ADD TO CART').click()
        cy.get('.fa-layers-counter.shopping_cart_badge').contains('1');         //Checks the cart contains 1 item

        cy.contains('REMOVE').click()
        cy.get('.fa-layers-counter.shopping_cart_badge').should('not.exist');           //Checks the cart is empty again
    })
})
