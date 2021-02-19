// Loops - outro tipo de for

// para usar quando não se precisa do índice

// dentro das chaves "{}" do "for", fica o código a ser usado em loop

// depois do "of" sempre tem que entrar algo "iterável", como um array, por exemplo

// no exemplo abaixo, ele vai definir o valor de item uma vez para cada item dentro da array. Ex.: let item = 0, depois let item = 1, depois let item = 2, até o final do array

const listaDeCompras = ["Arroz", "Feijão", "Batata"];

for (let item of listaDeCompras) {
  console.log(item);
}