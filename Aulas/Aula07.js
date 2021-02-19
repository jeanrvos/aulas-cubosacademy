// booleanos e condicionais

// const nome = 'Jean' //string
// const idade = '31', peso = 80.5 // numeros
// const ehMaior = true // booleanos

// ===, >, <, >=, <=

// &&, ||, ! (e, ou, não)

// = atribuição, === comparação, !== diferença

const massa = 80;
const altura = 1.77;
const imc = massa / (altura * altura);

const saudavel = imc <= 25 && imc >= 20;

console.log(saudavel);