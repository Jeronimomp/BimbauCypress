
   /// <reference types="cypress" /> 
   describe('Registro', function(){
   
    it('Registro exitoso en Bimbau', function(){cy.wait(2000);
    cy.visit('https://app.bimbau.co/');
    cy.wait(2000);
    cy.get(':nth-child(4) > .header-container > .login-container > .btn-register').click();cy.wait(2000);
    cy.get('.toast__close-button > svg').click();//cerrar pop up de cookies
    cy.wait(2000);
    cy.get(':nth-child(1) > .field > .ui > input').type('angeldavid55@gmail.com');cy.wait(2000);
    cy.get(':nth-child(2) > .field > .ui').click({force: true});cy.wait(2000);
    cy.get('.visible > :nth-child(2) > .text').click({force: true});cy.wait(2000);
    cy.get(':nth-child(3) > .field > .ui > input').type('1063283967',{force: true});cy.wait(2000);
    cy.get(':nth-child(4) > .field > .ui > input').type('Angel',{force: true});cy.wait(2000);
    cy.get(':nth-child(5) > .field > .ui > input').type('Marzola',{force: true});cy.wait(2000);
    cy.get('.equal > :nth-child(1) > input').type('3127016780',{force: true});cy.wait(2000);
    cy.get('.equal > :nth-child(2) > input').type('7746670',{force: true});cy.wait(2000);
    cy.get(':nth-child(3) > input').type('333',{force: true});cy.wait(2000);
    cy.get('.mt-4 > .field > .ui > input').type('Vendedor',{force: true});cy.wait(2000);
  

    function cambiar(){
      
        };
    cy.wait(2000);
  
   cy.get('iframe')
    .first()
    .its('0.contentDocument.body')
    .should('not.be.undefined')
    .and('not.be.empty')
    .then(cy.wrap)
    .find('#recaptcha-anchor')
    .should('be.visible')
    .click();
    
    cy.wait(10000);
    cy.get('[style="display: flex; justify-content: center; margin-top: 2rem;"] > .ui').click({force: true});
    cy.wait(5000);
    cy.get('h1').should('have.text', 'Confirma la cuenta');

    });

})