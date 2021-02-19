// Loops - for

// usar o "for" para percorrer uma lista inteira ou quando se sabe quantas "voltas" você vai dar, do contrário, usar o "while"

// exemplo para uso do "while": para procurar um item específico em uma lista, pois vai percorrer a lista até encontrar o item, se existir 



const listaDeCompras = ["Arroz", "Feijão", "Batata"];

for (let indice = 0; indice < listaDeCompras.length; indice++) {
  console.log(listaDeCompras[indice]);
}


// let indice = 0;

// while (indice < listaDeCompras.length) {
// console.log(listaDeCompras[indice]);
// indice++;
// }