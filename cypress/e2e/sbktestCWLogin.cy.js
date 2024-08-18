describe('SBK Customer Registration functionality', () => {
    it('SBK Register new user', () => {
        cy.visit('https://www.store-block-test.xyz/beautycustomercoreservice');
        cy.get('#navbarDropdownMenuLink > .fas').click();
        cy.get('.dropdown-item').click();
        cy.get('.ng-pristine > .app-input').type('storebloctest01+07@gmail.com');
        cy.get('.password >.app-input').type('St0reBl0c@01+07');
        cy.get('div.mt-4 >.btn').click();
        cy.get('#navbarDropdownMenuLink > .fas').click();
        cy.get('.dropdown-item');
        cy.get(':nth-child(7) > .dropdown-item').click();
        

    
             


    })

  })