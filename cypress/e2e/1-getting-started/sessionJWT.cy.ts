describe('JWT Session', () => {
    it('is logged in through local storage ', () => {

      cy.LoginByApi().then(function(){

        cy.visit("https://rahulshettyacademy.com/client", {
          onBeforeLoad: function(window) {
            // Accessing the browser's local storage directly
            window.localStorage.setItem('token', Cypress.env('token'));
          }
        });
      })

    })
})