import { URL_LOGIN, MENSAGENS } from "../support/constants";
import { verificarMensagem } from "../support/utils";

describe("Login", () => {
  let loginData;

  beforeEach(() => {
    cy.visit(URL_LOGIN);
    cy.fixture("loginData").then((data) => {
      loginData = data[0]; // acessa o primeiro objeto do array
    });
  });

  it("Login com nome e senha válidos e verifica redirecionamento para area de segurança", () => {
    cy.login(loginData.userNameValid, loginData.passwordValid)

    cy.contains("#flash", MENSAGENS.loginSucesso).should("be.visible");
  });

  it("Login com nome válido e senha inválida", () => {
    cy.login(loginData.userNameValid, loginData.passwordInvalid)

    verificarMensagem(MENSAGENS.senhaInvalida);
  });

  it("Login com nome válido e senha em branco", () => {
    cy.get("#username").type("tomsmith");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.senhaInvalida);
  });

  it("Login com nome inválido e senha válida", () => {
    cy.login(loginData.userNameInvalid, loginData.passwordValid)
    verificarMensagem(MENSAGENS.usuarioInvalido);
  });

  it("Login com nome inválido e senha inválida", () => {
    cy.login(loginData.userNameInvalid, loginData.passwordInvalid)

    verificarMensagem(MENSAGENS.usuarioInvalido);
  });

  it("Login com nome inválido e senha em branco", () => {
    cy.get("#username").type("tomsmith1");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido);
  });

  it("Login com nome em branco e senha válida", () => {
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido);
  });

  it("Login com nome em branco e senha inválida", () => {
    cy.get("#password").type("teste123");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido);
  });

  it("Login com nome e senha em branco", () => {
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido);
  });
});
