describe("Shop page", () => {
  beforeEach(() => {
    cy.visit(" http://localhost:5173/cart");
    cy.injectAxe();
  });

  it("is accessible", () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
      }
    })
  });
});