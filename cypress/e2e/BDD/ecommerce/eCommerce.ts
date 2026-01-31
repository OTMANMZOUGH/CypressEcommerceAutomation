import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../support/PageObjects/HomePage";
import prodactsPage from "../../../support/PageObjects/ProdactsPage";
import cartPage from "../../../support/PageObjects/CartPage";

Given( 'I am on the ecommerce page', () => {

    homePage.goto(Cypress.env('url') + '/loginpagePractise/')

})
When( 'I click on the Add to cart button', () => {
    homePage.login(user.username, user.password)
    prodactsPage.pageValidation()
    prodactsPage.verifyCardLimite()
})
When( 'I should see the prodact in the cart', function () {

    prodactsPage.addProdact(prodactName)
    let cartPage= prodactsPage.goToCart()
})
When( 'I should see the total price', function () {
    cartPage.sumOfProdact().then((calculatedSum) => {
        cartPage.verifyTotalPrice(calculatedSum);
    });
})
Then( 'I should see the success message', function () {
    let confirmePage= cartPage.goToConfirme()
    confirmePage.submitConfirme()
    confirmePage.getAlertMessage().should('contain', 'Success')
})