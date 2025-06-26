import { URL_LOGIN, MESSAGE } from "../support/constants";
import { checkMessage } from "../support/utils";

describe("Login", () => {
  let loginData;

  beforeEach(() => {
    cy.visit(URL_LOGIN);
    cy.fixture("loginData").then((data) => {
      loginData = data[0]; // access the first object in the array
    });
  });

  it("Login with valid username and password and checks secure area redirection", () => {
    cy.login(loginData.userNameValid, loginData.passwordValid)

    cy.contains("#flash", "Error Message").should("be.visible");
  });

  it("Login with valid username and invalid password", () => {
    cy.login(loginData.userNameValid, loginData.passwordInvalid)

    checkMessage(MESSAGE.invalidPassword);
  });

  it("Login with valid username and blank password", () => {
    cy.get("#username").type("tomsmith");
    cy.contains("button", "Login").should("be.visible").click();

    checkMessage(MESSAGE.invalidPassword);
  });

  it("Login with invalid username and valid password", () => {
    cy.login(loginData.userNameInvalid, loginData.passwordValid)
    checkMessage(MESSAGE.invalidUsername);
  });

  it("Login with invalid username and invalid password", () => {
    cy.login(loginData.userNameInvalid, loginData.passwordInvalid)

    checkMessage(MESSAGE.invalidUsername);
  });

  it("Login with invalid username and blank password", () => {
    cy.get("#username").type("tomsmith1");
    cy.contains("button", "Login").should("be.visible").click();

    checkMessage(MESSAGE.invalidUsername);
  });

  it("Login with blank username and valid password", () => {
    cy.get("#password").type("SuperSecretPassword!");
    cy.contains("button", "Login").should("be.visible").click();

    checkMessage(MESSAGE.invalidUsername);
  });

  it("Login with blank username and invalid password", () => {
    cy.get("#password").type("teste123");
    cy.contains("button", "Login").should("be.visible").click();

    checkMessage(MESSAGE.invalidUsername);
  });

  it("Login with blank username and blank password", () => {
    cy.contains("button", "Login").should("be.visible").click();

    checkMessage(MESSAGE.invalidUsername);
  });
});
