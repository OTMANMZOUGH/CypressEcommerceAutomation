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
        let totalprice =0;

        homePage.goto(Cypress.env('url') + '/loginpagePractise/')
        let prodactsPage= homePage.login(user.username, user.password)

        prodactsPage.pageValidation()
        prodactsPage.verifyCardLimite()
        prodactsPage.addProdact(prodactName)

        let cartPage= prodactsPage.goToCart()
        cartPage.sumOfProdact().then((sum) => {
            cartPage.verifyTotalPrice(sum);
        });




        cy.contains('button','Checkout').click()
        cy.get('#country').type('Morocco')
        cy.get('input[value=Purchase]').click()
        cy.get('.alert-success').should('be.visible').and('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')






    })//end it
})//end describe