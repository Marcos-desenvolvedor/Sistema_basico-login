import promptSync from "prompt-sync";
import { ValidarSenha } from "./utils/validacoes.js";

const prompt = promptSync();

const logins = [
  {
    userName: "Marcos2323",
    passaword: "293087je",
  },
];

// CRIA e RETURN USER
function CriarUserName() {
  let user = prompt("DIGITE SEU USER: ").trim();

  while (user === "") {
    console.log("USER INVÁLIDO, DIGITE NOVAMENTE!");
    user = prompt("DIGITE SEU USER: ").trim();
  }

  return user;
}

// CRIAR e RETURN a SENHA
function CriarSenha() {
  let userPassword = prompt("CRIE SUA SENHA: ");
  let erros = ValidarSenha(userPassword);

  while (erros.length > 0) {
    console.log("SENHA INVÁLIDA");
    erros.forEach((e) => console.log("- " + e));

    userPassword = prompt("CRIE SUA SENHA: ");
    erros = ValidarSenha(userPassword);
  }
  return userPassword;
}

//CRIAR LOGINS e ADD NO ARRAY DE LOGINS
function CriarLogin() {
  const NameUser = CriarUserName();

  const UserPassword = CriarSenha();

  logins.push({
    userName: NameUser,
    passaword: UserPassword,
  });
}

// Fazer Login e faz Verificações
function FazerLogin() {
  let userNameLogin = prompt("USUARIO: ").trim();
  let userExiste = logins.find((u) => u.userName === userNameLogin);

  while (!userExiste) {
    console.log("USER INVALIDO, DIGITE NOVAMENTE");
    userNameLogin = prompt("USUARIO: ").trim();
    userExiste = logins.find((u) => u.userName === userNameLogin);
  }

  let userPasswordLogin = prompt("SENHA: ");

  while (userExiste.passaword != userPasswordLogin) {
    console.log("SENHA INVÁLIDA, DIGITE NOVAMANTE");
    userPasswordLogin = prompt("SENHA: ");
  }
}

console.log(logins);

//Mostra as opçoes do software
function Funcoes() {
  while (true) {
    console.log(" 1 - Criar Login");
    console.log(" 2 - Fazer Login");
    const opcao = prompt("OPÇÃO: ");

    switch (opcao) {
      case "1":
        CriarLogin();
        break;

      case "2":
        FazerLogin();
        break;
    }
  }
}

Funcoes();
