context("Check Homepage CTAs", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });

  it("Check the Banner", () => {
    cy.get("[data-cy=banner]").contains("Learn").click();
    cy.url().should("include", "/delivery");
  });

  it("Return Home and Visit the Hero section CTA", () => {
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
    cy.get("[data-cy=heroCTA]").contains("Contact Us").click();
    cy.url().should("include", "/contactus");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });
});
