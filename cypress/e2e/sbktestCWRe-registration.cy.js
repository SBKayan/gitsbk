describe('SBK Customer Registration functionality', () => {
    it('SBK Register new user', () => {
        cy.visit('https://www.store-block-test.xyz/beautycustomercoreservice');
        cy.get('#navbarDropdownMenuLink').click();
        cy.get('.dropdown-item').click();
        cy.get('.mt-4 > a').click();
        cy.get(':nth-child(1) > .text-white > .form-field > .form-field__label')
        cy.get('.ng-pristine > .app-input').type("storebloctest01+07@gmail.com");
        cy.get(':nth-child(2) > .text-white > .form-field > .form-field__label')
        cy.get(':nth-child(2) > .text-white > .form-field > .form-field__control > .ng-pristine > .password > .app-input').type('St0reBl0c@01+07');
        cy.get('.ng-dirty > .password > .password__actions > span > .ng-star-inserted > .fas').click();
        cy.get(':nth-child(3) > .text-white > .form-field > .form-field__label');
        cy.get('.ng-untouched > .password > .app-input').type('St0reBl0c@01+07');
        cy.get(':nth-child(5) > .btn').click();
        cy.get(':nth-child(5) > .btn')
        cy.get(".cdk-global-overlay-wrapper").contains("Firebase: The email address is already in use by another account. (auth/email-already-in-use).")


        
             


    })

  })