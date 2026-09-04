let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")


const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#pcScore");

const genCompChoice = () => {
 const options= ["rock", "paper","scissors"]
 const randidx = Math.floor(Math.random()*3);
 return options[randidx];
}

const drawGame = ()=> {
    msg.innerText= "Game is Draw. Play Again!"
    msg.style.backgroundColor= "rgb(7, 7, 38)";
}

const showWinner= (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText= `You win. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green";
        userScorePara.innerText = userScore
    }else {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";

    }

}

const playTime = (userChoice) => {
    const compChoice = genCompChoice();
     
    if (userChoice === compChoice){
        //draw game
        drawGame();
        return;
    }else{
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ?false:true
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors"? false:true    
        }else{
            userWin = compChoice === "rock"?false:true
        }

        }
        showWinner(userWin, userChoice, compChoice)
    }


choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
     const userChoice = choice.getAttribute("id")
     console.log(userChoice)
     playTime(userChoice);
    })
    
});