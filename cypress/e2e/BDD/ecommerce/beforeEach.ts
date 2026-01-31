let user;
beforeEach(() => {
    cy.fixture('data').then((data) => {
        user = data;
    });
})
let prodactName = user.prodactName;