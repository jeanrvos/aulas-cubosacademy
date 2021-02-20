// 01 - Divisível por x

// function solucao(numero, x) {
// 	// seu código aqui
//     const resto = numero % x;
    
//     if (resto === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// 02 - Jackpot

// function solucao(resultado1, resultado2, resultado3) {
// 	// seu código aqui	
//     if(resultado1 == resultado2 && resultado2 == resultado3) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


// 03 - Derrapagem

// function solucao(velocidade, aceleracao) {
// 	//seu código aqui  
//     let resultado = ((velocidade * velocidade) * -1) / (2 * aceleracao);
//     console.log(resultado);  
// }

// function processData(input) {
//     const { velocidade, aceleracao } = JSON.parse(input);
//   	solucao(velocidade, aceleracao);
// }


// 04 - Colisão

// function solucao(velocidade, aceleracao, distanciaObjeto) {
//   //seu código aqui
//     let distanciaDerrapagem = ((velocidade * velocidade) * -1) / (2 * aceleracao)
    
//     if (distanciaObjeto < distanciaDerrapagem) {
//         console.log("COLISAO A FRENTE")        
//         } else if (distanciaObjeto === distanciaDerrapagem) {
//                    console.log("NAO ACELERE")
//                    } else {
//                        console.log("CAMINHO SEGURO")
//                    }
// }


// 05 - Enésimo número par

// function solucao(n) {
//   // seu código aqui
//     let numeroPar = 2 * n;
    
//     console.log(numeroPar);
    
// }


// 06 - Black friday

// function solucao(produtos, valorMaximo, avaliacaoMinima) {
// // seu código aqui
//     let listaPresentesOk = [];
        
//     for (let i = 0; i < produtos.length; i++) {
//         const presente = produtos[i];
//         if (presente.valor > valorMaximo || presente.avaliacao < avaliacaoMinima) {
//             continue;            
//             } else {
//                 listaPresentesOk.push(presente);
//             }            
//     }
    
//     console.log(listaPresentesOk);
  
// }


// 07 - Purificação

// function solucao(stringCorrompida) {
// 	// seu código aqui
//     const caracteresEspeciais = "";
       
//     let letraNova = "";
//     let resposta = "";
    
//     for (i = 0; i < stringCorrompida.length; i++) {
//         const letraOriginal = stringCorrompida[i];
     
//         if (letraOriginal === "!" || letraOriginal === "@" || letraOriginal === "#" || letraOriginal === "$" || letraOriginal === "%" || letraOriginal === "&" || letraOriginal === "*" || letraOriginal === "(" || letraOriginal === ")") {
//             letraNova = caracteresEspeciais;
//         } else {
//             letraNova = stringCorrompida[i];
//         }
//         resposta += letraNova
//     }
//     console.log(resposta);
    
// }


// 08 - Empréstimo

// function solucao(ganhos, serasaScore, mesesParaPagar) {
//   //seu código aqui
//     let juros = 0;
    
//     if (serasaScore < 300) {
//         juros = 3;
//         } else if (serasaScore < 700) {
//             juros = 9;
//         } else {
//             juros = 15;
//         }
    
//     const parcela = ((ganhos * 3) + (ganhos * (juros / 100))) / mesesParaPagar;
    
//     console.log(parcela);
        
// }


// 09 - Forca

// function solucao(palpite, palavra) {
// 	// seu código aqui
//     let acertos =0;
    
//     for (i = 0; i < palavra.length; i++) {
//         if (palpite === palavra[i]) {
//             acertos++
//         }
//     }
//     console.log(acertos);    
// }


// 10 - Coincidência

// function solucao(jogadas) {
//   //seu código aqui
//    let escolheuUm = 0;
//    let escolheuZero = 0; 

    
//    for (i = 0; i < jogadas.length; i++) {
//        const jogada = jogadas[i]
              
//        if (jogada === 1) {
//             escolheuUm++;
//         } else {
//             escolheuZero++;
//         }
//     }
    
//     if (escolheuUm === escolheuZero) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
        
// }


// 11 - Então é Natal

// function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
//   // seu código aqui
//     let valorSalgado = 0;
//     let valorDoce = 0;
//     let valorBebida = 0;    
      
//     let valorFinalCompras = 0;
    
//     for (i = 0; i < produtos.length; i++) {
//         const produtoComprado = produtos[i];
        
//         if (produtoComprado.categoria === "SALGADO") {
//             valorSalgado += ((produtoComprado.valor * produtoComprado.quantidade) * (90 / 100));
//         } else if (produtoComprado.categoria === "DOCE") {
//             valorDoce += ((produtoComprado.valor * produtoComprado.quantidade) * (85 / 100));
//         } else {
//             valorBebida += ((produtoComprado.valor * produtoComprado.quantidade) * (70 / 100));
//         }
        
//      const valorDasCompras = valorSalgado + valorDoce + valorBebida
        
//      if (cupomDesconto === "NATAL10" && ehPrimeiraCompra && valorDasCompras > 3000) {
//          valorFinalCompras = (valorDasCompras * (90 / 100)) + (distanciaRestaurante * 120);
//      } else if (cupomDesconto === "NATAL20" && ehPrimeiraCompra && valorDasCompras > 4500) {
//             valorFinalCompras = (valorDasCompras * (80 / 100)) + (distanciaRestaurante * 120);
//      } else if (cupomDesconto === "NATAL30" && ehPrimeiraCompra && valorDasCompras > 6000) {
//             valorFinalCompras = (valorDasCompras * (70 / 100)) + (distanciaRestaurante * 120);
//      } else if (cupomDesconto === "NATALSUPREMO" && ehPrimeiraCompra && valorDasCompras > 8000) {
//             valorFinalCompras = valorDasCompras * (70 / 100)
//      } else {
//             valorFinalCompras = valorDasCompras + (distanciaRestaurante * 120);
//      }   
        
//     }
    
//     console.log(valorFinalCompras);
// }
