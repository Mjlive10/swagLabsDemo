const loginSequence = require("../Pages/loginpage");

function logIn(loginFuncName) {
    loginSequence[loginFuncName]();
}

describe('The ability to login with only approved credentials', () => {

    it('allows an authorised user to login successfully and access the product page', () => {
        logIn("loginAsStandardUser")
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')      //Confirmation that the correct page is now displayed
    })

    it('informs a locked out user that their account is locked', () => {
        logIn("loginAsLockedOutUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Sorry, this user has been locked out.')        //Confirmation that the correct message is provided to the user
    })

    it('does not allow a problem user to view the site correctly', () => {
        logIn("loginAsProblemUser")
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')      //Confirmation that the correct page is now displayed
        cy.get('div').find('img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')      //Confirmation that the inventory images are incorrect
    })

    it('allows a performance glitched user to login after delay', () => {
        logIn("loginAsGlitchedUser")
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')      //Confirmation that the correct page is now displayed
    })

    it('does not allow a user to login without inputting a username', () => {
        logIn("loginAsEmptyUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Username is required')        //Confirmation that the correct message is provided to the user
    })

    it('does not allow a user to login without inputting a password', () => {
        logIn("loginAsNoPasswordUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Password is required')        //Confirmation that the correct message is provided to the user
    })

    it('does not allow a user to login with an incorrect password', () => {
        logIn("loginAsWrongPasswordUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Username and password do not match any user in this service')        //Confirmation that the correct message is provided to the user
    })

    it('does not allow a user to login with incorrect letter casing in the username', () => {
        logIn("loginAsWrongCasingUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Username and password do not match any user in this service')        //Confirmation that the correct message is provided to the user
    })

    it('does not allow a user to login with incorrect letter casing in the password', () => {
        logIn("loginAsWrongCasingPasswordUser")
        cy.url().should('include', 'https://www.saucedemo.com/')        //Confirmation that the login page is still displayed and the user can not access
        cy.get('form').find('button').should('have.class', 'error-button')      //Confirmation that the error button is displayed
        cy.contains('Epic sadface:')
        cy.contains('Username and password do not match any user in this service')        //Confirmation that the correct message is provided to the user
    })
})