/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=nav-section]").contains("iStrat").click();
    cy.url().should("include", "/");
  });

  it("Visit the delivery link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
    cy.url().should("include", "/delivery");
  });

  it("Visit the consulting link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Consulting").click();
    cy.url().should("include", "/consulting");
  });

  it("Visit the IT Security link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("IT Security").click();
    cy.url().should("include", "/security");
  });

  it("Visit the Integrations link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Integrations").click();
    cy.url().should("include", "/integrations");
  });

  it("Visit the Automations link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Automations").click();
    cy.url().should("include", "/automation");
  });

  it("Visit the ContactUs link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Contact Sales").click();
    cy.url().should("include", "/contactus");
  });

  it("Visit the delivery link on consulting panel", () => {
    cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
    cy.url().should("include", "/delivery");
  });

  it("Visit the staffing page", () => {
    cy.get("[data-cy=staffing-link]").contains("Staffing").click();
    cy.url().should("include", "/staffing");
    cy.go("back");
  });

  it("Visit the delivery page", () => {
    cy.get("[data-cy=delivery-link]").contains("Delivery").click();
    cy.url().should("include", "/delivery");
    cy.go("back");
  });

  it("cy.reload() - reload the page", () => {
    cy.reload();
    cy.reload(true);
  });

  it("cy.visit() - visit a remote url", () => {
    cy.visit("/blog", {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
    });
  });
});
