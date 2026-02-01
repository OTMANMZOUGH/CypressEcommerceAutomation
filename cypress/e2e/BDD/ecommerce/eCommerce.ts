import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../support/PageObjects/HomePage";
import prodactsPage from "../../../support/PageObjects/ProdactsPage";
import { registerUserHook } from "./beforeEach";

registerUserHook();

Given('I am on the ecommerce page', function () {
    homePage.goto(Cypress.env('url') + '/loginpagePractise/');
});

When('I login to the application', function () {
    homePage.login(this.user.username, this.user.password);
    prodactsPage.pageValidation();
    prodactsPage.verifyCardLimite();
});

When('I add items to cart and checkout', function () {
    prodactsPage.addProdact(this.user.prodactName);
    this.currentCartPage = prodactsPage.goToCart();
});

When('Validate the total price', function () {
    this.currentCartPage.sumOfProdact().then((calculatedSum) => {
        this.currentCartPage.verifyTotalPrice(calculatedSum);
    });
});

Then('Select the country submit and verify Thank you', function () {
    const confirmePage = this.currentCartPage.goToConfirme();
    confirmePage.submitConfirme();
    confirmePage.getAlertMessage().should('contain', 'Success');
});