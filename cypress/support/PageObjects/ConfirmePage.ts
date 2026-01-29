class ConfirmePage {

    submitConfirme() {
        cy.get('#country').type('Morocco')
        cy.get('input[value=Purchase]').click()
    }
    getAlertMessage(){
        return cy.get('.alert-success')
    }
}
export default ConfirmePage;