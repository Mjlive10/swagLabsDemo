var Constants = require('./constants');

function LoginSequence() {
    /**
     * @returns {LoginSequence}
     */
    this.loginAsStandardUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.standardUsername)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsLockedOutUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.lockedOutUsername)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsProblemUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.problemUsername)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsGlitchedUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.glitchedUsername)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsEmptyUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsNoPasswordUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.standardUsername)
        cy.contains('LOGIN').click()
    };

    this.loginAsWrongPasswordUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.standardUsername)
        cy.get('input[id="password"]').type(Constants.wrongPassword)
        cy.contains('LOGIN').click()
    };

    this.loginAsWrongCasingUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.capitalUsername)
        cy.get('input[id="password"]').type(Constants.password)
        cy.contains('LOGIN').click()
    };

    this.loginAsWrongCasingPasswordUser = function () {
        cy.visit(Constants.baseUrl)
        cy.get('input[id="user-name"]').type(Constants.standardUsername)
        cy.get('input[id="password"]').type(Constants.casingPassword)
        cy.contains('LOGIN').click()
    };
}

module.exports = new LoginSequence();
