Cypress.Commands.add('login', (username, password) => {
  if (username) cy.get('#username').type(username);
  if (password) cy.get('#password').type(password);
  cy.contains("button", "Login").should("be.visible").click();
});