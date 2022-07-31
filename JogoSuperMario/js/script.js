const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const audioJump = new Audio("./audio/mario_pulando.mp3");
const audioGameOver = new Audio("./audio/gameOver.mp3");
const audioStart = new Audio("./audio/musica-fundo.mp3");
const scoreGame = document.querySelector(".score");

audioStart.play();

const loopGame = setInterval(() => {        

    const jump = () => {
        mario.classList.add("jump-mario");
    
        setTimeout(() => {
            mario.classList.remove("jump-mario");
        }, 500);
    
        audioJump.play();
    };
    
    document.addEventListener("keydown", jump);
    document.addEventListener("click", jump);    

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");        

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"; 

        audioJump.pause();
        audioStart.pause();
        audioGameOver.play();
        
        clearInterval(loopGame)     
    }

}, 10);

    let score = 0;
    let cross = true;

    setInterval(() => {    
        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 115){
        if (score != 0)
            scoreGame.innerHTML = "Score " + score;
    } else if (marioPosition > 115 && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    }, 10);

    function updateScore(score) {
    scoreGame.innerHTML = "Score " + score;
    }


    