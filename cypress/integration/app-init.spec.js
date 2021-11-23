describe('App initialization', () => {
    it('Displays todos from API on load', () => {
        cy.server();


        // cy.route('GET', '/api/todos', 'fixture:todos');

        // Longer syntax
        cy.fixture('todos').then(todos => cy.route('GET', '/api/todos', todos));

        cy.visit('/');
        cy.get('.todo-list li').should('have.length', 4);
    });
});
