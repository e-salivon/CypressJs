import { Given } from "cypress-cucumber-preprocessor/steps";
import { NavigateTo, getPageByName } from "../../support/pageObject/navigationPages";

const url = 'http://localhost:4200/pages'

Given('I open test application', () => {
  cy.visit(url)
});

Given('I open {string} page', (pageName) => {
  const pageMethod = getPageByName(NavigateTo, pageName);

  if (pageMethod) {
      pageMethod();
  } else {
    console.error(`Method "${pageMethod}" not found in the class`);
    return null;
}
});

