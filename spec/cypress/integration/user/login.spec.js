describe("SignIn Experience", () => {
  it("Signs In Existing User", () => {
    // Spec Setup preparing form data
    const password = "12341234";

    // create user
    cy.appFactories([["create", "user", { password: password }]]).then(
      (results) => {
        const record = results[0];

        // Starting from Application Root
        cy.visit("/");
        cy.contains("a", "Sign In").click();

        // on the Login Page
        cy.contains("Sign In").should("be.visible");

        // fill in form with valid user registration data
        cy.get("[name='user[email]']").type(record.email);
        cy.get("[name='user[password]']").type(password);

        cy.contains("button", "Sign In").click();

        // Successful Login => Correct Greeting
        cy.contains(`Hello ${record.name}`).should("be.visible");
      }
    );
  });
});
