function solucao(textoCodificado) {
// Declarada a função acima
  const dicionario = {
    "###": "C",
    "##@": "U",
    "#@#": "B",
    "#@@": "A",
    "@##": "D",
    "@#@": "E",
    "@@#": "M",
    "@@@": "Y",
  };
// Declarado o objeto acima
  let resposta = "";
// Declarada a variável que vai apresentar a resposta da tradução do texto codificado

  for(i=0; i < textoCodificado.length; i+=3) {
  const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
  resposta += dicionario[pedaco]
  }
  console.log(resposta);
}

solucao("#@@####@@@##@#@@@#@@@");