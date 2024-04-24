const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        life: document.querySelector("#lifes")
    },
    values: {
        hitPosition: 0,
        result: 0,
        currentTime: 30,
        lifeId: 3,
    },
    actions: {
        timerId: setInterval(randomSquare, 600),
        countDownTimerID: setInterval(countDown, 1000),
    },
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerID);
        clearInterval(state.actions.timerId);
        alert("Tempo Esgotado! O seu resultado foi: " + state.values.result);
    }
}

function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.15;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy")
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");

    state.values.hitPosition = randomSquare.id
}

function addHitBox(){
    state.view.life.textContent = 'x'+state.values.lifeId;
    state.view.squares.forEach((square) =>{
        square.addEventListener("mousedown", ()=>{
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
            else if(square.id != state.values.hitPosition){
                state.values.lifeId--;
                state.values.hitPosition = null;
                state.view.life.textContent = 'x'+state.values.lifeId;
                if(state.values.lifeId <= 0){
                    clearInterval(state.actions.countDownTimerID);
                    clearInterval(state.actions.timerId);
                    alert("Game Over!!! Você perdeu todas as vidas... Resultado: "+ state.values.result);
                }
            }
        })
    })
}


function init() {
    addHitBox();
}

init();