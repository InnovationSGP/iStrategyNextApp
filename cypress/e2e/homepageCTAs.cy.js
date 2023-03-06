import { page_routes } from "../../src/lib/pageRoutes";

context("Check Homepage CTAs", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });

  it("Check the Banner", () => {
    cy.get("[data-cy=banner]").contains("Visit the blog").click();
    cy.url().should("include", page_routes.resourceCenter);
  });

  it("Return Home and Visit the Hero section CTA", () => {
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
    cy.get("[data-cy=heroCTA]").contains("Contact").click();
    cy.url().should("include", "/contactus");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });
});
