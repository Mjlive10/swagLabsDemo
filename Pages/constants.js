"use strict";

var Constants = function () {

    this.baseUrl = "https://www.saucedemo.com/"
    this.standardUsername = "standard_user";
    this.lockedOutUsername = "locked_out_user";
    this.problemUsername = "problem_user";
    this.glitchedUsername = "performance_glitch_user";
    this.capitalUsername = "Standard_User";
    this.password = "secret_sauce";
    this.wrongPassword = "not_secret_sauce";
    this.casingPassword = "Secret_Sauce";
};

module.exports = new Constants();
