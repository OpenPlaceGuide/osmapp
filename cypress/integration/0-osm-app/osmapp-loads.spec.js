describe('The OsmApp Main Page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000');
    cy.contains('h1', 'OsmAPP');
  });
});
