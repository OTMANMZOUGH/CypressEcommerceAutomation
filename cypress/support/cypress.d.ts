/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to login via API and inject token into local storage.
             * @example cy.LoginByApi()
             */
            LoginByApi(): Chainable<void>;
        }
    }
}

// This empty export is necessary to turn the file into a module
export {};