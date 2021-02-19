// Loops - outro tipo de for

const listaDeCompras = ["Arroz", "Feijão", "Batata", "Farinha", "Ovo"];

for (let item of listaDeCompras) {
  console.log("Verificando item: " + item);
  if (item === "Batata") {
    console.log("Batata está na lista");
    break;
  } 
}