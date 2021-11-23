describe('Form Input', () => {
  it('Focuses the input on load', () => {
    cy.visit('/')
    cy.focused().should('have.class', 'new-todo')
  })

  // ONLY as fit
  // it.only('Accepts input', () => {

  it('Accepts input', () => {
    const typedText = 'New todo'
    cy.visit('/')
    cy
      .get('.new-todo')
      .type(typedText)
      .should('have.value', typedText);
    cy.contains('li', 'Active')
      .should('not.be.disabled');
  })
})
