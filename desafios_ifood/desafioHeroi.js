let prompt = require('prompt-sync')();

console.log("Bem vindo ao Classificador de nível de Herói!");
console.log("Digite o seu nickname: ");
let nome = prompt();
console.log("Digite a sua quantidade de XP: ");
let xp = prompt();
let nivel;

if(xp<=1000){
    nivel = "Ferro";
}else if(xp<=2000){
    nivel = "Bronze";
}else if(xp<=5000){
    nivel = "Prata";
}else if(xp<=7000){
    nivel = "Ouro";
}else if(xp<=8000){
    nivel = "Platina";
}else if(xp<=9000){
    nivel = "Ascendente";
}else if(xp<=10000){
    nivel = "Imortal";
}else{
    nivel = "Radiante";
}

console.log("O Herói " + nome + " está no nível " + nivel);