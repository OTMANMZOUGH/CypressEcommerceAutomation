class ConfirmePage {

    submitConfirme() {
        cy.get('#country').type('Morocco')
        cy.get('input[value=Purchase]').click()
        cy.get('.alert-success').should('be.visible').and('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    }
}