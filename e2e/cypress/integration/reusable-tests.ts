/* global cy */

export const interceptCompanionUrlRequest = () =>
  cy.intercept("http://localhost:3020/url/*").as("url");
export const interceptCompanionUnsplashRequest = () =>
  cy.intercept("http://localhost:3020/search/unsplash/*").as("unsplash");

export function runRemoteUrlImageUploadTest() {
  cy.get('[data-cy="Url"]').click();
  cy.get(".bulky-Url-input").type(
    "https://raw.githubusercontent.com/transloadit/bulky/main/e2e/cypress/fixtures/images/cat.jpg"
  );
  cy.get(".bulky-Url-importButton").click();
  cy.get(".bulky-StatusBar-actionBtn--upload").click();
  cy.wait("@url").then(() => {
    cy.get(".bulky-StatusBar-statusPrimary").should("contain", "Complete");
  });
}

export function runRemoteUnsplashUploadTest() {
  cy.get('[data-cy="Unsplash"]').click();
  cy.get(".bulky-SearchProvider-input").type("book");
  cy.get(".bulky-SearchProvider-searchButton").click();
  cy.wait("@unsplash");
  // Test that the author link is visible
  cy.get(".bulky-ProviderBrowserItem")
    .first()
    .within(() => {
      cy.root().click();
      // We have hover states that show the author
      // but we don't have hover in e2e, so we focus after the click
      // to get the same effect. Also tests keyboard users this way.
      cy.get('input[type="checkbox"]').focus();
      cy.get("a").should("have.css", "display", "block");
    });
  cy.get(".bulky-c-btn-primary").click();
  cy.get(".bulky-StatusBar-actionBtn--upload").click();
  cy.wait("@unsplash").then(() => {
    cy.get(".bulky-StatusBar-statusPrimary").should("contain", "Complete");
  });
}
