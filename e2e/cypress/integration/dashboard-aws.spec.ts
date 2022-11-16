describe("Dashboard with @bulky/aws-s3", () => {
  beforeEach(() => {
    cy.visit("/dashboard-aws");
    cy.get(".bulky-Dashboard-input:first").as("file-input");
    cy.intercept({ method: "GET", pathname: "/s3/params" }).as("get");
    cy.intercept({ method: "POST" }).as("post");
  });

  it("should upload cat image successfully", () => {
    cy.get("@file-input").selectFile("cypress/fixtures/images/cat.jpg", {
      force: true,
    });

    cy.get(".bulky-StatusBar-actionBtn--upload")
      .click()
      .then(() => {
        cy.wait(["@post", "@get"]).then(() => {
          cy.get(".bulky-StatusBar-statusPrimary").should(
            "contain",
            "Complete"
          );
        });
      });
  });
});
