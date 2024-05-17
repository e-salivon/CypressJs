export class NavigationPages{
    FormLayout(){
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click({force: true});
    };
    DatePicker(){
        cy.contains('Forms').click();
        cy.contains('Datepicker').click({force: true});
    };
    Dialog(){
        cy.contains('Modal & Overlays').click();
        cy.contains('Dialog').click({force: true});
    };
    Window(){
        cy.contains('Modal & Overlays').click();
        cy.contains('Window').click({force: true});
    };
    Popover(){
        cy.contains('Modal & Overlays').click();
        cy.contains('Popover').click({force: true});
    };
    Toastr(){
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click({force: true});
    };
    Tooltip(){
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click({force: true});
    };
    SmartTable(){
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click({force: true});
    };
    TreeGrid(){
        cy.contains('Tables & Data').click();
        cy.contains('Tree Grid').click({force: true});
    };
    Stepper(){
        cy.contains('Layout').click();
        cy.contains('Stepper').click({force: true});
    };
    Accordion(){
        cy.contains('Layout').click();
        cy.contains('Accordion').click({force: true});
    };
    Login(){
        cy.contains('Auth').click();
        cy.contains('Login').click({force: true});
    };
    Register(){
        cy.contains('Auth').click();
        cy.contains('Register').click({force: true});
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