const {Corredor} = require('./Corredor')

const Luigi = new Corredor("Luigi", 3, 4, 4, 0)
const Donkey = new Corredor("Donkey Kong", 2, 2, 5, 0)
const Mario = new Corredor("Mario", 4, 3, 3, 0)
const Bowser = new Corredor("Bowser", 5, 2, 5, 0)
const Yoshi = new Corredor("Yoshi", 2, 4, 3, 0)
const Peach = new Corredor("Yoshi", 3, 4, 2, 0)

const corredores = [Luigi, Donkey, Bowser, Mario, Peach, Yoshi]

const rollDice = async()=>{
    return Math.floor(Math.random()*6) + 1;
}

const getRandRacer = async()=>{
    let random = Math.floor(Math.random() * corredores.length) + 1
    const player = corredores.find(player=>(player === corredores[random-1]))
    return player
}

const getRandomBlock = async()=>{
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }

    return result
}

async function logRollResult(player, block, diceResult, attribute){
    console.log(`${player} 🎲 rolou um dado de ${block} ${attribute} + ${diceResult} = ${diceResult + attribute}`)
}

const startRace = async()=>{
    const player1 = await getRandRacer()
    const player2 = await getRandRacer()

    if(player1 === player2){
        return
    }
    console.log(player1)
    console.log(player2)
    console.log(`🚦🏁 Corrida entre ${player1.nome} e ${player2.nome} vai começar!!! \n`)
    for(let round = 1; round<= 5; round++){
        console.log(`🏁 Rodada ${round}`)
        
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if(block === 'RETA'){
            totalTestSkill1 = diceResult1 + player1.velocidade
            totalTestSkill2 = diceResult2 + player2.velocidade

            await logRollResult(player1.nome, "velocidade", diceResult1, player1.velocidade)
            await logRollResult(player2.nome, "velocidade", diceResult2, player2.velocidade)
        }
        if(block === 'CURVA'){
            totalTestSkill1 = diceResult1 + player1.manobrabilidade
            totalTestSkill2 = diceResult2 + player2.manobrabilidade

            await logRollResult(player1.nome, "manobrabilidade", diceResult1, player1.manobrabilidade)
            await logRollResult(player2.nome, "manobrabilidade", diceResult2, player2.manobrabilidade)
        }
        if(block === 'CONFRONTO'){
            let powerResult1 = diceResult1 + player1.poder
            let powerResult2 = diceResult2 + player2.poder

            console.log(`${player1.nome} confrontou com ${player2.nome} 🥊`)

            await logRollResult(player1.nome, "poder", diceResult1, player1.poder)
            await logRollResult(player2.nome, "poder", diceResult2, player2.poder)

            if(powerResult1 > powerResult2 && player2.pontos > 0){
                console.log(`${player1.nome} venceu o confronto! ${player2.nome} perdeu um ponto 🐢`)
                player2.pontos--
            }
            else if(powerResult1 < powerResult2 && player1.pontos > 0){
                console.log(`${player2.nome} venceu o confronto! ${player1.nome} perdeu um ponto 🐢`)
                player1.pontos--
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado, nenhum ponto perdido" : "")
        }

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${player1.nome} marcou um ponto.`)
            player1.pontos++
        }else if(totalTestSkill1 < totalTestSkill2){
            console.log(`${player2.nome} marcou um ponto.`)
            player2.pontos++
        }

        console.log('-------------------------------')
    }
    declareWinner(player1, player2)
}

async function declareWinner(player1, player2){
    console.log("Resultado final:")
    console.log(`${player1.nome}: ${player1.pontos} ponto(s)`)
    console.log(`${player2.nome}: ${player2.pontos} ponto(s)`)

    if(player1.pontos > player2.pontos){
        console.log(`\n${player1.nome} venceu a corrida! Parabéns! 🏆`)
    }else if(player2.pontos > player1.pontos){
        console.log(`\n${player2.nome} venceu a corrida! Parabéns! 🏆`)
    }else{
        console.log("A corrida terminou em empate...")
    }

}

(async function main(){
    
    await startRace()
})()

