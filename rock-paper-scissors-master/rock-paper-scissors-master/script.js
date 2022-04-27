const buttons = document.querySelectorAll(".pick")
const scoreEl = document.querySelector("#score")
const main = document.querySelector("main")
const selection = document.querySelector(".selection")
const reset = document.querySelector("#reset") 
const userSelect = document.querySelector("#user-select") 
const computerSelect = document.querySelector("#computer-select") 
const winner = document.querySelector("#winner") 
const openBtn = document.querySelector("#open") 
const closeBtn = document.querySelector("#close") 
const modal = document.querySelector("#modal") 
const choices = ["paper", "rock", "scissors"];
let userChoice = "";
let score = 0;


buttons.forEach(button => {   
    button.addEventListener("click", ()=>{
        userChoice = button.dataset.choice;

        checkWinner()
        
    })
});

reset.addEventListener("click", ()=>{
    main.style.display = "flex"
    selection.style.display = "none";

    
})
openBtn.addEventListener("click", ()=>{
    modal.style.display = "flex"
    
})
closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none"
    
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    updateSelection(userSelect, userChoice)
    updateSelection(computerSelect, computerChoice)
    
    if(userChoice === computerChoice){
        winner.innerText = "Draw"
    }
    else if ((userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper" )) {
        updateScore();
        winner.innerText = "Won"
    } 
    else {
        // updateScore(-1)
        winner.innerText = "Lost"
    }
    main.style.display = "none"
    selection.style.display = "flex"
}

function updateScore() {
    score += 1
    scoreEl.innerText = score
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function updateSelection(selectionEl, choice){
    selectionEl.classList.remove("btn-paper");
    selectionEl.classList.remove("btn-rock");
    selectionEl.classList.remove("btn-scissors");

    const img = selectionEl.querySelector("img");
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`
    img.alt = choice

}




