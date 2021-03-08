"use strict";

var Constants = function () {

    //var isDev = !process.env.E2E_ENV;
    // add E2E_ENV environment variable to fat server machine
    // you can do it via UI:
    // Start > (search) Edit The System Environment Variables, Environment Variables
    // New System Variable, name=E2E_ENV, value=1
    // or you can add "SET E2E_ENV=1" into jenkins batch command script
this.baseUrl = "https://www.saucedemo.com/"
    // Admin
    this.standardUsername = "standard_user";
this.lockedOutUsername = "locked_out_user";
    this.problemUsername = "problem_user";
    this.glitchedUsername = "performance_glitch_user";
    this.capitalUsername = "Standard_User";
    this.password = "secret_sauce";
    this.wrongPassword = "not_secret_sauce";
    this.casingPassword = "Secret_Sauce";
    // Author
    // this.authorUsername = "author1@TIBCONimbusQA.local";
    // this.authorPassword = "N1mbust3st";
    // // Author + Datatable Admin
    // this.authorUsernameAM = "authorAM@TIBCONimbusQA.local";
    // this.authorPasswordAM = "N1mbust3st";
    // // Author + Account Manager
    // this.authorUsernameDA = "authorDA@TIBCONimbusQA.local";
    // this.authorPasswordDA = "N1mbust3st";
    // // Author + Datatable Manager
    // this.authorUsernameDM = "authorDM@TIBCONimbusQA.local";
    // this.authorPasswordDM = "N1mbust3st";
    // // Author + Statement Set Admin
    // this.authorUsernameSA = "authorSA@TIBCONimbusQA.local";
    // this.authorPasswordSA = "N1mbust3st";
    // // Author + Statement Set Manager
    // this.authorUsernameSM = "authorSM@TIBCONimbusQA.local";
    // this.authorPasswordSM = "N1mbust3st";
    // // Author + Datatable Admin + Statement Set Admin
    // this.authorUsernameDSA = "authorDSA@TIBCONimbusQA.local";
    // this.authorPasswordDSA = "N1mbust3st";
    // // Author + Datatable Manager + Statement Set Manager
    // this.authorUsernameDSM = "authorDSM@TIBCONimbusQA.local";
    // this.authorPasswordDSM = "N1mbust3st";
    // // Author + Storyboard Manager
    // this.authorUsernameSBM = "authorSBM@TIBCONimbusQA.local";
    // this.authorPasswordSBM = "N1mbust3st";
    // // Author + Scorecard Manager
    // this.authorUsernameSCM = "authorSCM@TIBCONimbusQA.local";
    // this.authorPasswordSCM = "N1mbust3st";
    // // Author + Reports Manager
    // this.authorUsernameRM = "authorRM@TIBCONimbusQA.local";
    // this.authorPasswordRM = "N1mbust3st";
    // // Author + For Password Change tests
    // this.authorUsernamePC = "authorPC@TIBCONimbusQA.local";
    // this.authorPasswordPC = "N1mbust3st";
    // // Contributor
    // this.contributorAccount = "contributor15@TIBCONimbusQA.local";
    // this.contributorPassword = "N1mbust3st";
    // //BannerUser
    // this.refreshDialogUser="authorRefreshDialogUser@TIBCONimbusQA.local";
    // this.refreshDialogPwd = "N1mbust3st";
    //
    // let baseUrl, reloadPath, configPath, batchServerPath, repositoryPath;
    //
    // if (browser.params && browser.params.backendIndex) {
    //     const index = parseInt(browser.params.backendIndex, 10);
    //     baseUrl = `http://127.0.0.${index}:${5000 + index}/nimbus/CtrlWebISAPI.dll`;
    //
    //     // fixme
    //     reloadPath = "C:/TIBCO Nimbus/Trunk4/Web Server/Reload";
    //     configPath = "C:/TIBCO Nimbus/Trunk4/Web Server/Config";
    //     batchServerPath = "C:/TIBCO Nimbus/Trunk4/Batch Server";
    // } else {
    //     //Only change these options (URL and paths) for local testing
    //     if (isDev) {
    //         // change these lines to suit your dev environment
    //         baseUrl = "http://mhammers-p51.emea.tibco.com/TIBCONimbus/CtrlWebISAPI.dll";
    //         reloadPath = "C:/TIBCO Nimbus/Trunk4/Web Server/Reload";
    //         configPath = "C:/TIBCO Nimbus/Trunk4/Web Server/Config";
    //         batchServerPath = "C:/TIBCO Nimbus/Trunk4/Batch Server";
    //         repositoryPath = "C:/TIBCO Nimbus/Trunk4/Process Repository";
    //     }
    //
    //     //Do NOT change these options (URL and paths), they are used only for the FAT servers through Jenkins.
    //     else {
    //         const hostname = require("os").hostname().toLowerCase();
    //         baseUrl = `http://${hostname}.tibconimbusqa.local/TIBCONimbusAT/CtrlWebISAPI.dll/`;
    //         reloadPath = "C:/qa-automation-temp/TIBCO Nimbus/Web Server/Reload";
    //         configPath = "C:/qa-automation-temp/TIBCO Nimbus/Web Server/Config";
    //         batchServerPath = "C:/qa-automation-temp/TIBCO Nimbus/Batch Server";
    //         repositoryPath = "C:/qa-automation-temp/TIBCO Nimbus/PR";
    //     }
    // }
    //
    //
    // // do not change these lines
    // const path = require("path");
    // this.stopFile  = path.join(reloadPath, "stop.js");
    // this.startFile = path.join(reloadPath, "start.js");
    // this.restartFile = path.join(reloadPath, "restart.js");
    // this.configFile = path.join(configPath, "config.ini");
    // this.batchServerFile = path.join(batchServerPath, "CtrlBatchServer.ini");
    // this.repositoryPath = repositoryPath;
    // // make sure baseUrl ends with '/'
    // this.baseUrl = baseUrl + (/\/$/.test(baseUrl) ? "" : "/");
    //
    // /**
    //  * Expand partial URL received from server into full URL including host from the baseUrl.
    //  * E.g. /branch-name/ctrlWebIsapi.dll/webHome => http://localhost/branch-name/ctrlWebIsapi.dll/webHome
    //  * or api/diagram/0123 => http://localhost/branch-name/ctrlWebIsapi.dll/api/diagram/0123
    //  * @param partialUrl Partial URL without protocol and host
    //  */
    // this.expandUrl = (partialUrl) => this.baseUrl + partialUrl.replace(/.*ctrlwebisapi\.dll\//i, "");
};

module.exports = new Constants();
