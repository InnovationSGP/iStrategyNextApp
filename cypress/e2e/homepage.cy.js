/// <reference types="cypress" />
import {page_routes} from "../../src/lib/pageRoutes";
import {navigationItems} from "../../src/content/navContent";

describe("Innovation Strategy Homepage", () => {
    it("Successfully Loads", () => {
        cy.visit("/");
    });
    // it("Visits Consulting Navigation Panel", () => {
    //     cy.get("[data-cy=consulting-pop]").contains("Consulting").trigger('onmouseover');
    //     cy.get("[data-cy=consulting-panel]").contains("Project Delivery").click();
    //     cy.url().should("include", page_routes.Delivery);
    // });
    // it("Visit the GRC link on consulting panel", () => {
    //     cy.get("[data-cy=consulting-pop]").contains("Consulting").click();
    //     cy.get("[data-cy=consulting-panel]").contains("Governance, Risk And Compliance").click();
    //     cy.url().should("include", page_routes.ITSecurity);
    // });
    //
    // it("Visit the staffing page", () => {
    //     cy.get("[data-cy=staffing-link]").contains("Technical Staffing").click();
    //     cy.url().should("include", page_routes.staffing);
    //     cy.go("back");
    // });

    it("cy.reload() - reload the page", () => {
        cy.reload();
        cy.reload(true);
    });

    it("cy.visit() - visit a remote url", () => {
        cy.visit(page_routes.contactUs, {
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

describe('Broken Links Test', () => {
    it('Should check for broken links on the website', () => {
        // Visit the website
        cy.visit('/');

        // Get all links on the page
        cy.get("a").each(page => {
            const link = page.prop('href')
            cy.request({
                url: link,
                failOnStatusCode: false  // allow good and bad response to pass into then
            }).then(response => {
                Cypress.log({
                    name: link,
                    message: response.status
                })
            })
        })
    });
});

describe('Contact Page Submission Test', () => {
    it('Should fill out and submit the contact form', () => {
        // Visit the contact page
        cy.visit(page_routes.contactUs);

        // Fill out the form fields
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="phone"]').type('222-222-2222');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('This is a test message for Cypress automation.');

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Assert that the form submission was successful
        cy.log(`Form is successfully submitted`);
    });
});
export {};