# 🧪 Casos de Teste - Sistema de Login

Este repositório contém a especificação de casos de teste para o fluxo de login do sistema disponível em:  
🔗 https://the-internet.herokuapp.com/login

## 📋 Objetivo
Validar o comportamento do sistema diante de diferentes combinações de **nome de usuário** e **senha**, garantindo que o processo de autenticação funcione corretamente, aceitando credenciais válidas e rejeitando inválidas.

---

## ✅ Casos de Teste

### CT-001 – Login com nome e senha válidos
- **Username:** `tomsmith`  
- **Password:** `SuperSecretPassword!`  
- **Resultado Esperado:**  
  ✅ Redireciona para área autenticada  
  ✅ Mensagem: `"You logged into a secure area!"`

---

### CT-002 – Nome válido, senha inválida
- **Username:** `tomsmith`  
- **Password:** `senhaErrada123`  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your password is invalid!"`

---

### CT-003 – Nome válido, senha em branco
- **Username:** `tomsmith`  
- **Password:** *(vazio)*  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your password is invalid!"`

---

### CT-004 – Nome inválido, senha válida
- **Username:** `usuarioErrado`  
- **Password:** `SuperSecretPassword!`  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

### CT-005 – Nome e senha inválidos
- **Username:** `usuarioErrado`  
- **Password:** `senhaInvalida`  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

### CT-006 – Nome inválido, senha em branco
- **Username:** `usuarioErrado`  
- **Password:** *(vazio)*  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

### CT-007 – Nome em branco, senha válida
- **Username:** *(vazio)*  
- **Password:** `SuperSecretPassword!`  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

### CT-008 – Nome em branco, senha inválida
- **Username:** *(vazio)*  
- **Password:** `senhaErrada`  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

### CT-009 – Nome e senha em branco
- **Username:** *(vazio)*  
- **Password:** *(vazio)*  
- **Resultado Esperado:**  
  ❌ Acesso negado  
  ⚠️ Mensagem: `"Your username is invalid!"`

---

## 🚀 Ferramentas Utilizadas
- Cypress
- Node.js
- VS Code

---

## 🧠 Observações
Esses testes utilizam um site público para fins de treinamento. Não há necessidade de autenticação real nem uso de dados sensíveis.

---



