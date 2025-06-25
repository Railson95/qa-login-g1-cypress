import { URL_LOGIN, MENSAGENS } from '../support/constants';
import {verificarMensagem} from '../support/utils'

describe("Login", () => {
  beforeEach(() => {
    cy.visit(URL_LOGIN);
  });

  it("Login com nome e senha válidos e verifica redirecionamento para area de segurança", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    cy.contains("#flash", MENSAGENS.loginSucesso).should(
      "be.visible"
    );
  });

  it("Login com nome válido e senha inválida", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.senhaInvalida)
  });

  it("Login com nome válido e senha em branco", () => {
    cy.get("#username").type("tomsmith");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.senhaInvalida)
  });

  it("Login com nome inválido e senha válida", () => {
    cy.get("#username").type("tomsmith1");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });

  it("Login com nome inválido e senha inválida", () => {
    cy.get("#username").type("tomsmith1");
    cy.get("#password").type("test123");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });

  it("Login com nome inválido e senha em branco", () => {
    cy.get("#username").type("tomsmith1");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });

  it("Login com nome em branco e senha válida", () => {
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });

  it("Login com nome em branco e senha inválida", () => {
    cy.get("#password").type("teste123");
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });

  it("Login com nome e senha em branco", () => {
    cy.contains("button", "Login").should("be.visible").click();

    verificarMensagem(MENSAGENS.usuarioInvalido)
  });
});
