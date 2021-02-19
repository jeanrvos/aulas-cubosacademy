// condições de proibição de entrada: idade < 12 || > 65 || possuiPatologiaCardiaca === true || alturaEmCm < 150

// preço por pessoa === 10 reais se: ehEstudante === true || idade < 18
// else, preço por pessoa === 20 reais 

// avaliadas as condições, imprime o valor adicional total a ser pago pela agência

function solucao(listaDePessoas) {
  let valor = 0;

  for (let i = 0; i < listaDePessoas.length; i++) {
      const pessoa = listaDePessoas[i];
      if (pessoa.idade < 12 || pessoa.idade > 65 || pessoa.possuiPatologiaCardiaca || pessoa.alturaEmCm < 150) {
        continue;
      } 
      
      if (pessoa.ehEstudante || pessoa.idade < 18) {
        valor += 10;
      } else {
        valor += 20;
      }
  }

  console.log(valor);
}

solucao([
    {
      "nome": "Tiffany",
      "idade": 24,
      "alturaEmCm": 156,
      "possuiPatologiaCardiaca": false,
      "ehEstudante": true
    },
    {
      "nome": "Callie",
      "idade": 12,
      "alturaEmCm": 179,
      "possuiPatologiaCardiaca": false,
      "ehEstudante": false
    },
    {
      "nome": "Adrian",
      "idade": 49,
      "alturaEmCm": 151,
      "possuiPatologiaCardiaca": true,
      "ehEstudante": false
    },
    {
      "nome": "Morrison",
      "idade": 28,
      "alturaEmCm": 182,
      "possuiPatologiaCardiaca": true,
      "ehEstudante": false
    },
    {
      "nome": "Lindsay",
      "idade": 10,
      "alturaEmCm": 131,
      "possuiPatologiaCardiaca": false,
      "ehEstudante": true
    }
  ]);
