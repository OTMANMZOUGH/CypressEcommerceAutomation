import { Before } from "@badeball/cypress-cucumber-preprocessor";


export function registerUserHook() {
    Before(function () {
        cy.fixture('data').then((data) => {
            this.user = data;
        });
    });
}