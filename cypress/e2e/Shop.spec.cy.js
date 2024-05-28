describe("Shop page", () => {
  beforeEach(() => {
    cy.visit(" http://localhost:5173/shop");
    cy.injectAxe();
  });

  it("page load", () => {
    cy.get(".glow").should("have.text", "Shop");
  });

  it("total listings", () => {
    cy.get(".listing").should("have.length", 4);
  });

  it("listing buttons render", () => {
    cy.get("#moreDets").should("have.text", "More Details");
    cy.get("#addCart").should("have.text", "Add to Cart");
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