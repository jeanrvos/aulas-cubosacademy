//IMC tabela
// imc = massa (kg)/ altura_ao_quadrado (m)
// abaixo de 18.5 -> abaixo do peso
// entre18.5 e 24.9 -> peso normal
// 25 ou mais -> sobrepeso

const massa = 80;
const altura = 1.77;

const imc = massa / (altura * altura);
console.log("imc = " + imc);

if (imc < 18.5) {
  console.log("abaixo do peso");
} // else if (imc >= 18.5 && imc < 25) não precisa da primeira condição, pois já foi verificada no "if"
  else if (imc < 25) {
  console.log("peso normal");
} else {
  console.log("sobrepeso");
}