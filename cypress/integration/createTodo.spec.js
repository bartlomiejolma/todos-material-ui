describe("Create Todo", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Todos");
    cy.contains("Empty");
  });

  it("Adds Todos and deletes it", () => {
    cy.get(
      ".MuiGrid-grid-xs-12 > :nth-child(1) > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.contains("Title").parent().type("Foo");
    cy.contains("Description").parent().type("Bar");
    cy.contains("Due Date").parent().type("2020-09-08");

    cy.contains("Save").click();

    cy.contains("Empty").should("not.exist");

    cy.contains("Foo");
    cy.contains("Bar");

    cy.get(".MuiCard-root").should("have.length", 1);

    cy.get(
      ".MuiGrid-grid-xs-12 >:nth-child(1) > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.contains("Title").parent().type("Foo");
    cy.contains("Description").parent().type("Baz");
    cy.contains("Due Date").parent().type("2020-09-08");

    cy.contains("Save").click();

    cy.get(".MuiCard-root").should("have.length", 2);

    cy.get(
      ":nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(2)"
    ).click();
    cy.get(".MuiCard-root").should("have.length", 1);
  });

  it("Can edit Todo", () => {
    cy.get(
      ".MuiGrid-grid-xs-12 > :nth-child(1) > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.contains("Title").parent().type("Foo");
    cy.contains("Description").parent().type("Bar");
    cy.contains("Due Date").parent().type("2020-09-08");

    cy.contains("Save").click();

    cy.contains("Empty").should("not.exist");

    cy.contains("Bar");

    cy.get(
      ":nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1)"
    ).click();
    cy.contains("Title").parent().type("Baz");
    cy.get("input[name=description]").clear();
    
    cy.contains("Save").click();

    cy.contains("FooBaz");
    cy.contains("Bar").should("not.exist");

  });
});
