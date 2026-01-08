const regras = {
  numeros: /[0-9]/,
  minusculas: /[a-z]/,
  maiusculas: /[A-Z]/,
  caractere: /[^A-Za-z0-9]/,
};

export function ValidarSenha(senha) {
  let erros = [];

  if (senha.length < 8) {
    erros.push("A senha deve conter no mínimo 8 caracteres");
  }

  if (!regras.numeros.test(senha)) {
    erros.push(" A senha deve conter números");
  }

  if (!regras.minusculas.test(senha)) {
    erros.push(" A senha deve conter letras minúsculas");
  }

  if (!regras.maiusculas.test(senha)) {
    erros.push(" A senha deve conter letras maiúsculas");
  }

  if (!regras.caractere.test(senha)) {
    erros.push(" A senha deve conter caracteres especiais");
  }

  return erros;
}
