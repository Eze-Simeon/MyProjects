
const buttons = document.querySelectorAll(".select")
const scoreEl = document.querySelector(".score")
const rules = document.querySelector(".rules")
const rulesModal = document.querySelector(".rules-modal")
const closeEl = document.querySelector(".rules-modal .close")
const mainContainer = document.querySelector(".main-container")
const submainContainer = document.querySelector(".submain-container")
const verdictH1 = document.querySelector(".verdict h1")
const verdict = document.querySelector(".verdict")
const reset = document.querySelector(".reset")
const userSelect = document.querySelector("#user-select")
const computerSelect = document.querySelector("#computer-select")
const left = document.querySelector("#left")
const right = document.querySelector("#right")


const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let score = 0;
let playerChoice;





buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        
        playerChoice = button.getAttribute("data-choice");
        checkWinner()
    
    })
});


function checkWinner() {

const computerChoice = randomChoice();

updateSelection(userSelect, playerChoice)
updateSelection(computerSelect, computerChoice)

left.style.display = "none";
right.style.display = "none";
    if (playerChoice === computerChoice) {
        // updateScore(0);
        verdict.style.display = "none";
        computerSelect.style.visibility = "hidden";

        setTimeout(() => {
            verdictH1.innerHTML = "You Draw";
            verdict.style.display = "block";
            // left.style.display = "block";
            // right.style.display = "block";
            computerSelect.style.visibility = "visible";
        }, 2000);

    } else if(playerChoice === "lizard" && computerChoice === "spock" ||
        playerChoice === "spock" && computerChoice === "scissors"||
        playerChoice === "scissors" && computerChoice === "paper"||
        playerChoice === "paper" && computerChoice === "rock"||
        playerChoice === "rock" && computerChoice === "lizard"||
        playerChoice === "lizard" && computerChoice === "paper"||
        playerChoice === "paper" && computerChoice === "spock"||
        playerChoice === "spock" && computerChoice === "rock"||
        playerChoice === "rock" && computerChoice === "scissors"||
        playerChoice === "scissors" && computerChoice === "lizard"){
            
        verdict.style.display = "none";
        computerSelect.style.visibility = "hidden";
        setTimeout(() => {
            updateScore(1)
            verdictH1.innerHTML = "You Win";
            verdict.style.display = "block";
            left.style.display = "block";
            right.style.display = "none";
            computerSelect.style.visibility = "visible";
        }, 2000);
        
    }else{
        verdict.style.display = "none";
        computerSelect.style.display = "hidden";

        setTimeout(() => {
            // updateScore(-1)
            verdictH1.innerHTML = "You Lose";
            verdict.style.display = "block";
            right.style.display = "block";
            left.style.display = "none";
            computerSelect.style.visibility = "visible";
        }, 2000);
    }

    mainContainer.style.display = "none"
    submainContainer.style.display = "block"
}



reset.addEventListener("click", ()=>{
    mainContainer.style.display = "flex"
    submainContainer.style.display = "none";
})

rules.addEventListener("click", ()=>{
    rulesModal.style.display = "flex";
})

closeEl.addEventListener("click", ()=>{
    rulesModal.style.display = "none";
    
})


function updateScore(num) {
    score+= num
    scoreEl.innerHTML = score
}

function randomChoice() {
    return  choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    selectionEl.className = `pick ${choice}-color`;
    selectionEl.firstElementChild.firstElementChild.src = `./images/icon-${choice}.svg`
}
