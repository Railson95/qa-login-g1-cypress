describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Login com nome e senha válidos e verifica redirecionamento para area de segurança", () => {
    cy.get("#username").type("tomsmith")
    cy.get("#password").type("SuperSecretPassword!")
    cy.contains('button', 'Login')
      .should('be.visible')
      .click()

    cy.contains(
      '#flash', 
      "You logged into a secure area!"
      ).should('be.visible')
  });
});
