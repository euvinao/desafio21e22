const prompt = require('prompt-sync')({sigint:true});

const jogador = prompt('Qual o seu nome? ');

let op = 10;
let pontuacao = 0;
let resposta;

while (op != 0) {
    op = parseInt(prompt("Qual tema você deseja jogar?  1 - História  2 - Geografia 3 - Ciência 0 - Sair "));

    switch (op) {
        case 1:
            resposta = prompt("Em qual ano a Revolução Francesa começou? ");
            if (resposta.toLowerCase() === "1789" || resposta.toLowerCase() === "em 1789") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. A Revolução Francesa começou em 1789.");
            }
            resposta = prompt("Quem foi o primeiro presidente do Brasil? ");
            if (resposta.toLowerCase() === "marechal deodoro" || resposta.toLowerCase() === "deodoro da fonseca") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O primeiro presidente do Brasil foi Marechal Deodoro da Fonseca.");
            }
            resposta = prompt("Quem descobriu o Brasil? ");
            if (resposta.toLowerCase() === "pedro álvares cabral" || resposta.toLowerCase() === "cabral") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O descobridor do foi Pedro Álvares Cabral.");
            }
            break;

        case 2:
            resposta = prompt("O rio mais extenso do mundo é o Rio Amazonas. Verdadeiro ou Falso?");
            if (resposta.toLowerCase() === "Verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O rio mais extenso do mundo é o Rio Amazonas");
            }
            resposta = prompt("O Brasil é o maior país do mundo em extensão territorial. Verdadeiro ou Falso? ");
            if (resposta.toLowerCase() === "Falso") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O país com maior extensão territorial é a Rússia.");
            }
            resposta = prompt("A capital do Canadá é Ottawa. Verdadeiro ou Falso? ");
            if (resposta.toLowerCase() === "Verdadeiro") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. A Capital do Canadá é Ottawa.");
            }
            break;

        case 3:
            resposta = prompt("Quem foi o inventor da lâmpada elétrica? ");
            if (resposta.toLowerCase() === "thomas edison" || resposta.toLowerCase() === "edison") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O inventor da lâmpada elétrica foi Thomas Edison.");
            }
            resposta = prompt("Qual é o símbolo químico do ouro? ");
            if (resposta.toLowerCase() === "au") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O símbolo químico do ouro é Au.");
            }
            resposta = prompt("Quem é conhecido como o pai da teoria da relatividade? ");
            if (resposta.toLowerCase() === "albert einstein" || resposta.toLowerCase() === "einstein") {
                console.log("Parabéns!");
                pontuacao++;
            } else {
                console.log("Resposta incorreta. O pai da teoria da relatividade é Albert Einstein. ");
            }
            break;

        case 0:
            console.log("Você saiu!");
            break;

        default:
            console.log("Digite uma opção válida.");
            break;
    }
}

console.log(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`);
