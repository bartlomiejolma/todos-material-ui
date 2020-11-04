describe("Create Todo", () => {
  it("Initially the list of todos is empty", () => {
    cy.visit("http://localhost:5000");
    cy.contains("Empty");

    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.contains("Title").parent().type("Foo");
    cy.contains("Description").parent().type("Bar");
    cy.contains("Due Date").parent().type("2020-09-08");

    cy.contains("Save").click();

    cy.contains("Empty").should("not.exist");
  });
});
