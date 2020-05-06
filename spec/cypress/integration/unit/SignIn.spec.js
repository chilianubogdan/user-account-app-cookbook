// components/HelloWorld.spec.js
import { mount } from "cypress-vue-unit-test";
import { HelloWorld } from "../../../../app/javascript/views/SignIn.vue";
describe("HelloWorld component", () => {
  it("works", () => {
    mount(HelloWorld);
    // now use standard Cypress commands
    cy.contains("Hello World!").should("be.visible");
  });
});
