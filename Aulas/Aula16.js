// Objetos

// São um conjunto de variáveis onde se pode agrupar dados, mas que você pode acessar propriedades (dados) diferentes. No "array", fica em forma de lista

const pessoa = {
  nome: "Jean",
  idade: 31,
  altura: 1.77, // em metros
  peso: 100 // em kg
};



console.log(pessoa.nome);
// console.log(pessoa["nome"]);

const propriedade = "idade"
console.log(pessoa[propriedade]); // este caso só funciona com "[]"