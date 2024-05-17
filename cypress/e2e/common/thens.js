import { Then } from "cypress-cucumber-preprocessor/steps";

Then('I see {string} element', (elementName) =>{
    cy.get(`[data-e2e-name='${elementName}']`).should('be.visible')
});