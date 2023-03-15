import { page_routes } from "../../src/lib/pageRoutes";

describe("Find Broken Links", () => {
  beforeEach(() => {
    cy.viewport(1280, 1000);
  });

  it("Find all broken links", () => {
    cy.visit("/");

    cy.get("a").each((link) => {
      if (link.prop("href"))
        cy.request({
          url: link.prop("href"),
          failOnStatusCode: false,
        });

      cy.log(link.prop("href"));
    });
  });
});
