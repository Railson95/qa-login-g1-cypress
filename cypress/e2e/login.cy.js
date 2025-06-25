describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Login com nome e senha válidos e verifica redirecionamento para area de segurança", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    cy.contains("#flash", "You logged into a secure area!").should(
      "be.visible"
    );
  });

  it("Login com nome válido e senha inválida", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your password is invalid!");
      });
  });

  it("Login com nome válido e senha em branco", () => {
    cy.get("#username").type("tomsmith");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your password is invalid!");
      });
  });

  it("Login com nome inválido e senha válida", () => {
    cy.get("#username").type("tomsmith1");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your username is invalid!");
      });
  });

  it("Login com nome inválido e senha inválida", () => {
    cy.get("#username").type("tomsmith1");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your username is invalid!");
      });
  });

  it("Login com nome inválido e senha em branco", () => {
    cy.get("#username").type("tomsmith1");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your username is invalid!");
      });
  });

  it("Login com nome em branco e senha válida", () => {
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    cy.get("#flash")
      .invoke("text")
      .then((text) => {
        const mensagem = text.replace("×", "").trim();
        expect(mensagem).to.eq("Your username is invalid!");
      });
  });
});
