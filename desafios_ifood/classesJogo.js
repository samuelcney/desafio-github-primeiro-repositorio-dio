
class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque(){
        let ataque;
        if(this.tipo == "guerreiro"){
            ataque = "espada";
        }else if(this.tipo == "mago"){
            ataque = "magia";
        }else if(this.tipo == "monge"){
            ataque = "artes marciais";
        }else if(this.tipo == "ninja"){
            ataque = "shuriken";
        }else{
            console.log("Classe Inválida!");
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }

    escrever(){
        console.log(`Nome: ${this.nome} || Idade: ${this.idade} || Classe: ${this.tipo}`);
    }

}

let novoHeroi1 = new Heroi("Sam", "20", "ninja");
let novoHeroi2 = new Heroi("Davi", "12", "mago");

novoHeroi1.escrever();
novoHeroi1.ataque();

novoHeroi2.escrever();
novoHeroi2.ataque();