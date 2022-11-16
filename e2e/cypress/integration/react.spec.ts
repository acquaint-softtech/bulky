describe("@bulky/react", () => {
  beforeEach(() => {
    cy.visit("/react");
    cy.get("#dashboard .bulky-Dashboard-input:first").as("dashboard-input");
    cy.get("#modal .bulky-Dashboard-input:first").as("modal-input");
    cy.get("#drag-drop .bulky-DragDrop-input").as("dragdrop-input");
  });

  it("should render Dashboard in React and show thumbnails", () => {
    cy.get("@dashboard-input").selectFile(
      [
        "cypress/fixtures/images/cat.jpg",
        "cypress/fixtures/images/traffic.jpg",
      ],
      { force: true }
    );
    cy.get("#dashboard .bulky-Dashboard-Item-previewImg")
      .should("have.length", 2)
      .each((element) => expect(element).attr("src").to.include("blob:"));
  });

  it("should render Modal in React and show thumbnails", () => {
    cy.get("#open").click();
    cy.get("@modal-input").selectFile(
      [
        "cypress/fixtures/images/cat.jpg",
        "cypress/fixtures/images/traffic.jpg",
      ],
      { force: true }
    );
    cy.get("#modal .bulky-Dashboard-Item-previewImg")
      .should("have.length", 2)
      .each((element) => expect(element).attr("src").to.include("blob:"));
  });

  it("should render Drag & Drop in React and create a thumbail with @bulky/thumbnail-generator", () => {
    const spy = cy.spy();

    cy.window().then(({ bulky }) => bulky.on("thumbnail:generated", spy));
    cy.get("@dragdrop-input").selectFile(
      [
        "cypress/fixtures/images/cat.jpg",
        "cypress/fixtures/images/traffic.jpg",
      ],
      { force: true }
    );
    // not sure how I can accurately wait for the thumbnail
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000).then(() => expect(spy).to.be.called);
  });
});
