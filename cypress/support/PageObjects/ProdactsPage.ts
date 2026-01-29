import CartPage from "./CartPage";

class ProdactsPage {

    pageValidation(){
        cy.contains('Shop Name').should('be.visible')
    }
    verifyCardLimite(){
        cy.get('app-card').should('have.length', 4)
    }
    goToCart(){
        cy.contains('a','Checkout').click()
        return new CartPage()
    }
    addProdact(prodactName){

        //cy.get('app-card').filter(`:contains("${prodactName}")`)
        cy.get('app-card').filter(':contains("' + prodactName + '")')
            .then(($filteredCard) => {
                //cy.wrap($filteredCard).should('have,length', 1)
                cy.wrap($filteredCard).contains('button','Add').click()
                //cy.wrap($filteredCard).find('button').contains('Add').click()
            })
        cy.get('app-card').eq(0).contains('button','Add').click()
    }
}
export default ProdactsPage;