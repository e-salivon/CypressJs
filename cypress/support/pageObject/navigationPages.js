export class NavigationPages{
    formLayout(){
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    };
    datePicker(){
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();
    };
    smartTable(){
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();
    };
    treeGrid(){
        cy.contains('Tables & Data').click();
        cy.contains('Tree Grid').click();
    };
    stepper(){
        cy.contains('Layout').click();
        cy.contains('Stepper').click();
    };
    accordion(){
        cy.contains('Layout').click();
        cy.contains('Accordion').click();
    };
    login(){
        cy.contains('Auth').click();
        cy.contains('Login').click();
    };
    register(){
        cy.contains('Auth').click();
        cy.contains('Register').click();
    };

}

export const NavigateTo = new NavigationPages

export function getPageByName(instance, methodName) {
    // Check if the following method exists in the class
    if (typeof instance[methodName] === 'function') {
        // return method from the class
        return instance[methodName].bind(instance); // link context to the class
     }
    //need to renurn an error if the method is not found
    // else {
    //   
    //     console.error(`Method "${methodName}" not found in the class`);
    //     return null;
    // }
}