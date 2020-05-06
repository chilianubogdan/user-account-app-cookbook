describe("Registration Experience", () => {
  it("Registers a new user", () => {
    // Spec Setup preparing form data
    const email = "user@domain.root";
    const name = "FirsName LastName";
    const password = "12341234";

    // Starting from Application Root
    cy.visit("/");
    cy.contains("a", "Register").click();

    // on the Register Page
    cy.contains("Create an Account").should("be.visible");

    // fill in form with valid user registration data
    cy.get("[name='user[email]']").type(email);
    cy.get("[name='user[name]']").type(name);
    cy.get("[name='user[password]']").type(password);
    cy.get("[name='user[password_confirmation]']").type(password);

    cy.contains("button", "Register").click();

    // on the Register Page
    cy.url().should("include", "/register/confirm");
    cy.contains("Account Created").should("be.visible");
  });
});
