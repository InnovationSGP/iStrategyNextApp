import { page_routes } from "../../src/lib/pageRoutes";

context("Link Homepage through Logo", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=logo]").contains("iStrat").click();
    cy.url().should("include", "/");
  });

  it("Check the Banner", () => {
    cy.get("[data-cy=banner]").contains("Resource Center").click();
    cy.url().should("include", page_routes.resourceCenter);
  });

  it("Return Home and Visit the Hero section CTA", () => {
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
    cy.get("[data-cy=HeroSectionCTA]").contains("Ready").click();
    cy.url().should("include", "/contactus");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });
});
