let prompt = require('prompt-sync')();

function saldoVitorias(vitoria,derrota){
    let saldo = vitoria - derrota;
    return saldo;
}
function rank(saldo){
    if(saldo<=10){
        return "Ferro";
    }else if(saldo<=20){
        return "Bronze";
    }else if(saldo<=50){
        return "Prata";
    }else if(saldo<=80){
        return "Ouro";
    }else if(saldo<=90){
        return "Diamante";
    }else if(saldo<=100){
        return "Lendário";
    }else{
        return "Imortal";
    }
}

console.log("Bem vindo à Calculadora de partidas Rankeadas!");

console.log("Insira seu nome de jogador: ");
let nome = prompt();
console.log("Digite a sua quantidade vitórias: ");
let vitoria = prompt();
console.log("Digite a sua quantidade de derrotas: ");
let derrota = prompt();

let saldoRank = saldoVitorias(vitoria,derrota);
let ranking = rank(saldoRank);

console.log("O Herói " + nome + " tem saldo de " + saldoRank + " e está no rank: " + ranking);