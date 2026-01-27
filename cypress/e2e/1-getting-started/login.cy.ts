describe('Login', () => {
    let user;
    beforeEach(() => {
        cy.fixture('data').then((data) => {
            user = data;
        });
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    })

    it('Submit Login', () => {
        let prodactName = "Nokia Edge"
        let totalprice =0;
        cy.get('input[name="username"]').type(user.username)
        cy.get('input[name="password"]').type(user.password)
        cy.get("#signInBtn").click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)
        //cy.get('app-card').filter(`:contains("${prodactName}")`)
        cy.get('app-card').filter(':contains("' + prodactName + '")')
            .then(($filteredCard) => {
                //cy.wrap($filteredCard).should('have,length', 1)
                cy.wrap($filteredCard).contains('button','Add').click()
                //cy.wrap($filteredCard).find('button').contains('Add').click()
            })
        cy.get('app-card').eq(0).contains('button','Add').click()
        cy.contains('a','Checkout').click()







    })//end it
})//end describe