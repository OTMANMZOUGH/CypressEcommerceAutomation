import ProdactsPage from "./ProdactsPage";

class HomePage{

    goto(url) {
        cy.visit(url);
    }

    login(username: string, password: string){
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get("#signInBtn").click();

        // This is the "Magic" - it transitions to the next page
        return new ProdactsPage();
    }
}
const homePage = new HomePage();
export default homePage;