const choice = document.querySelector(".choice")
let result = document.querySelector(".result")
let comp = document.querySelector(".comp")

choice.addEventListener("click", function(e){
    /* Finding what player choose*/
    const player = e.target

    /* Declaring computer choice*/
    let computerChoice = Math.floor(Math.random() * 3); /* 0 = Rock,  1 =Paper, 2= Scissor */
    
        /*Deciding Winner*/
    if (player.classList.contains("rock")){
        if(computerChoice === 0){
            comp.innerText = ": Rock"
            return result.innerText = "Draw"
        }else if(computerChoice === 1){
            comp.innerText = ": Paper"
            return result.innerText = "Computer Wins"
        }else{
            comp.innerText = ": Scissor"
            return result.innerText = "You Win"
        }
    }
    if (player.classList.contains("paper")){
        if(computerChoice === 0){
            comp.innerText = ": Rock"
            return result.innerText = "You Win"
        }else if(computerChoice === 1){
            comp.innerText = ": Paper"
            return result.innerText = "Draw"
        }else{
            comp.innerText = ": Scissor"
            return result.innerText = "Computer Wins"
        }
    }
    if (player.classList.contains("scissor")){
        if(computerChoice === 0){
            comp.innerText = ": Rock"
            return result.innerText = "Computer Wins"
        }else if(computerChoice === 1){
            comp.innerText = ": Paper"
            return result.innerText = "You Win"
        }else{
            comp.innerText = ": Scissor"
            return result.innerText = "Draw"
        }
    }

});


