import homePage from "../../support/PageObjects/HomePage";
interface UserData {
    prodactName: string;
    username: string;
    password: string;
}
describe('End to End ecommerce Test', () => {
    let user;
    beforeEach(() => {
        cy.fixture('data').then((data) => {
            user = data;
        });
    })

    it('Submit Login', () => {
        let prodactName = user.prodactName;

        homePage.goto(Cypress.env('url') + '/loginpagePractise/')
        let prodactsPage= homePage.login(user.username, user.password)

        prodactsPage.pageValidation()
        prodactsPage.verifyCardLimite()
        prodactsPage.addProdact(prodactName)

        let cartPage= prodactsPage.goToCart()
        cartPage.sumOfProdact().then((calculatedSum) => {
            cartPage.verifyTotalPrice(calculatedSum);
        });

        let confirmePage= cartPage.goToConfirme()
        confirmePage.submitConfirme()

    })//end it
})//end describe