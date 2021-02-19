// function solucao(j, a) {
//   if (j === "PEDRA" && a === "TESOURA") {
//     console.log("JOAO")
//   } else if (j === "PAPEL" && a === "PEDRA") {
//     console.log("JOAO")
//   } else if (j === "TESOURA" && a === "PAPEL") {
//     console.log("JOAO")
//   } else if (j === a) {
//     console.log("EMPATE")
//   } else {
//     console.log("ANDRE")
//   }
// }

// solucao("PAPEL", "PEDRA");


function solucao(j, a) {
  if ((j === "PEDRA" && a === "TESOURA")  || (j === "PAPEL" && a === "PEDRA") || (j === "TESOURA" && a === "PAPEL")) {
    console.log("JOAO")
  } else if (j === a) {
    console.log("EMPATE")
  } else {
    console.log("ANDRE")
  }
}

solucao("TESOURA", "PAPEL");