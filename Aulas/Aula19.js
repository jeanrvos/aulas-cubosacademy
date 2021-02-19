// Funções que retornam valores
// receber uma pessoa e a idadeMinima
// devolver "true" ou "false"

// lembrando que as variáveis da função só existem dentro da função. Dentro do "escopo" da função


function ehMaiorDeIdade(pessoaVerificada, idadeMinima) {
  if(pessoaVerificada.idade >= idadeMinima) {
    return true;
  } else {
    return false;
  }
}

const pessoa1 = {
  nome: "José",
  idade:29
};

const pessoa2 = {
  nome: "André",
  idade: 15
};

const ehMaior = ehMaiorDeIdade(pessoa2, 18);

console.log(ehMaior);