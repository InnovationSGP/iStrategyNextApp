/// <reference types="cypress" />

describe("Innovation Strategy Homepage", () => {
  it("Successfully Loads", () => {
    cy.visit("/");
  });
});
export {};

// /// <reference types="cypress" />
// import { page_routes } from "../../src/lib/pageRoutes";

// it("Goes through all links in the navigation", () => {
//   cy.visit("/");
//   cy.get("[data-cy=nav-section]").contains("iStrat").click();
//   cy.url().should("include", "/");
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
//   cy.url().should("include", page_routes.Delivery);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel]").contains("IT Security").click();
//   cy.url().should("include", page_routes.ITSecurity);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel]").contains("Resource").click();
//   cy.url().should("include", page_routes.resourceCenter);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel]").contains("Offshore").click();
//   cy.url().should("include", page_routes.Offshore);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel-CTAs]").contains("Contact").click();
//   cy.url().should("include", page_routes.contactUs);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel-CTAs]").contains("Login").click();
//   cy.url().should("include", page_routes.secure);
//   cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//   cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
//   cy.url().should("include", page_routes.Delivery);
//   cy.get("[data-cy=staffing-link]").contains("Staffing").click();
//   cy.url().should("include", page_routes.staffing);
//   cy.go("back");
// });

// context("Navigation", () => {
//   beforeEach(() => {
//     cy.visit("/");
//     cy.get("[data-cy=nav-section]").contains("iStrat").click();
//     cy.url().should("include", "/");
//   });

//   it("Visit the delivery link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
//     cy.url().should("include", page_routes.Delivery);
//   });

//   it("Visit the IT Security link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel]").contains("IT Security").click();
//     cy.url().should("include", page_routes.ITSecurity);
//   });

//   it("Visit the Resource Center link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel]").contains("Resource").click();
//     cy.url().should("include", page_routes.resourceCenter);
//   });

//   it("Visit the Offshore link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel]").contains("Offshore").click();
//     cy.url().should("include", page_routes.Offshore);
//   });

//   it("Visit the ContactUs link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel-CTAs]").contains("Contact").click();
//     cy.url().should("include", page_routes.contactUs);
//   });

//   it("Visit the Resource Center link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel-CTAs]").contains("Resources").click();
//     cy.url().should("include", page_routes.resourceCenter);
//   });

//   it("Visit the login link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel-CTAs]").contains("Login").click();
//     cy.url().should("include", page_routes.secure);
//   });

//   it("Visit the delivery link on consulting panel", () => {
//     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
//     cy.get("[data-cy=consulting-panel]").contains("Delivery").click();
//     cy.url().should("include", page_routes.Delivery);
//   });

//   it("Visit the staffing page", () => {
//     cy.get("[data-cy=staffing-link]").contains("Staffing").click();
//     cy.url().should("include", page_routes.staffing);
//     cy.go("back");
//   });

//   it("cy.reload() - reload the page", () => {
//     cy.reload();
//     cy.reload(true);
//   });

//   it("cy.visit() - visit a remote url", () => {
//     cy.visit(page_routes.contactUs, {
//       timeout: 50000, // increase total time for the visit to resolve
//       onBeforeLoad(contentWindow) {
//         // contentWindow is the remote page's window object
//         expect(typeof contentWindow === "object").to.be.true;
//       },
//       onLoad(contentWindow) {
//         // contentWindow is the remote page's window object
//         expect(typeof contentWindow === "object").to.be.true;
//       },
//     });
//   });
// });
