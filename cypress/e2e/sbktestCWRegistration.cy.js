describe('SBK Customer Registration functionality', () => {
    it('SBK Register new user', () => {
        cy.visit('https://www.store-block-test.xyz/beautycustomercoreservice');
        cy.get('#navbarDropdownMenuLink').click();
        cy.get('.dropdown-item').click();
        cy.get(':nth-child(1) > .text-white > .form-field > .form-field__label')
        cy.get('.ng-pristine > .app-input').click();
        cy.get('.mt-3 > .text-white > .form-field > .form-field__label')
        cy.get('.password > .app-input').click();
        cy.get('.mt-2 > .btn')
        cy.get('.mt-4 > a').click();
        cy.get('.ng-touched > .app-input');
        cy.get('.ng-touched > .password > .app-input');
        cy.get(':nth-child(3) > .text-white > .form-field > .form-field__control > .ng-pristine > .password > .app-input')
        cy.get(':nth-child(5) > .btn')


        


        
             


    })

  })