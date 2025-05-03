// This file contains end-to-end tests for the application.

describe('Example End-to-End Test', () => {
    it('should load the application and display the ExampleComponent', () => {
        cy.visit('http://localhost:3000'); // Adjust the URL as necessary
        cy.get('h1').should('contain', 'Welcome to the Example App'); // Adjust the selector and text as necessary
    });

    it('should navigate to the example route', () => {
        cy.visit('http://localhost:3000'); // Adjust the URL as necessary
        cy.get('a[href="/example"]').click(); // Adjust the selector as necessary
        cy.url().should('include', '/example');
        cy.get('h2').should('contain', 'Example Page'); // Adjust the selector and text as necessary
    });
});