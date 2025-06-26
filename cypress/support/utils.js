export function checkMessage(mensagemEsperada) {
  cy.get("#flash")
    .invoke("text")
    .then((text) => {
      const mensagem = text.replace("×", "").trim();
      expect(mensagem).to.eq(mensagemEsperada);
    });
}