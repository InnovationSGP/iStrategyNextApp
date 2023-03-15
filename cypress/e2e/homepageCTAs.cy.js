import { page_routes } from "../../src/lib/pageRoutes";

it("Checks CTA links on home page", () => {
  cy.visit("/");
  cy.visit("/");
  cy.get("[data-cy=logo]").contains("iStrat").click();
  cy.url().should("include", "/");
  cy.get("[data-cy=nav-section]").contains("iStrat").click();
  cy.url().should("include", "/");
  cy.get("[data-cy=HeroSectionCTA]").contains("Ready").click();
  cy.url().should("include", "/contactus");
  cy.get("[data-cy=nav-section]").contains("iStrat").click();
  cy.url().should("include", "/");
});
