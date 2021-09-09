
   /// <reference types="cypress" /> 
   describe('Registro', function(){
   
    it('Registro exitoso en Bimbau', function(){
    cy.visit('https://app.bimbau.co/');
    
    cy.get(':nth-child(4) > .header-container > .login-container > .btn-register').click();
    cy.get('.toast__close-button > svg').click();//cerrar pop up de cookies
    cy.get(':nth-child(1) > .field > .ui > input').type('angeldavid25@gmail.com');
    cy.get(':nth-child(2) > .field > .ui').click({force: true});
    cy.get('.visible > :nth-child(2) > .text').click({force: true});
    cy.get(':nth-child(3) > .field > .ui > input').type('1063283967',{force: true});
    cy.get(':nth-child(4) > .field > .ui > input').type('Angel',{force: true});
    cy.get(':nth-child(5) > .field > .ui > input').type('Marzola',{force: true});
    cy.get('.equal > :nth-child(1) > input').type('3127016780',{force: true});
    cy.get('.equal > :nth-child(2) > input').type('7746670',{force: true});
    cy.get(':nth-child(3) > input').type('333',{force: true});
    cy.get('.mt-4 > .field > .ui > input').type('Vendedor',{force: true});
  


    cy.get('iframe[src*=recaptcha]')
    .its('0.contentDocument')
    .should(d => d.getElementById('recaptcha-token').click({force: true}));

    
    cy.wait(10000);
    cy.get('[style="display: flex; justify-content: center; margin-top: 2rem;"] > .ui').click({force: true});
    cy.wait(5000);
    cy.get('h1').should('have.text', 'Confirma la cuenta');

    });

})