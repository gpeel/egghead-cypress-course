describe('App initialization', () => {
    it('Displays todos from API on load', () => {
        cy.server();
        cy.route('GET', '/api/todos', 'fixture:todos').as('load');
        // as is an alias for the route

        cy.visit('/');

        cy.wait('@load'); // waiting for the alias route @ + load

        cy.get('.todo-list li').should('have.length', 4);
    });
});
