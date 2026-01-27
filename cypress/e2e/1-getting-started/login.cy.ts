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
        //logique for total price

        cy.get('tr td:nth-child(4) strong').each(($el) => {
            //Get the text (e.g., "₹. 50000")
            const amount = $el.text();
            let res = amount.replace(/[^0-9]/g, "");
            //cy.log(res);
            totalprice = totalprice + Number(res);
        })
        cy.get('h3 strong').then((element) => {
            const totalValue = element.text().replace(/[^0-9]/g, "");
            expect(Number(totalValue)).to.equal(totalprice);
        });
        cy.contains('button','Checkout').click()
        cy.get('#country').type('Morocco')
        cy.get('input[value=Purchase]').click()
        cy.get('.alert-success').should('be.visible').and('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')






    })//end it
})//end describe