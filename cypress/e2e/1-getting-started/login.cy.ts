import homePage from "../../support/PageObjects/HomePage";
describe('End to End ecommerce Test', () => {
    let user;
    beforeEach(() => {
        cy.fixture('data').then((data) => {
            user = data;
        });
    })

    it('Submit Order', () => {
        homePage.goto(Cypress.env('url') + '/loginpagePractise/')
        let prodactsPage= homePage.login(user.username, user.password)

        prodactsPage.pageValidation()
        prodactsPage.verifyCardLimite()
        prodactsPage.addProdact(user.prodactName)

        let cartPage= prodactsPage.goToCart()
        cartPage.sumOfProdact().then((calculatedSum) => {
            cartPage.verifyTotalPrice(calculatedSum);
        });

        let confirmePage= cartPage.goToConfirme()
        confirmePage.submitConfirme()
        confirmePage.getAlertMessage().should('contain', 'Success')

    })//end it
})//end describe