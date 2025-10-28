console.log("JS loaded");
let userScore = 0;
let compScore = 0;
const play = (userChoice) => {
    let choices = ["rock", "paper", "scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];
    console.log("User: " + userChoice);
    console.log("Computer: " + compChoice);
    let message = "";
    if (userChoice === compChoice) {
        message = "It's a draw!";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        message = "You won!";
        userScore = userScore + 1;
    } else {
        message = "You lost!";
        compScore = compScore + 1;
    }
    document.getElementById("area").innerText = "You chose: " + userChoice + " | Computer chose: " + compChoice;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
    document.getElementById("message").innerText = message;
}