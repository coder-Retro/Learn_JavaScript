const answer = 8;
let tries = 0;
let userInput = null;

while(userInput != answer) {
    userInput = prompt("Enter Your Guess: ");
    if(userInput < answer) console.log("You have guessed Lower");
    else if(userInput > answer) console.log("You have guessed Higher");
    tries++;
}

console.log("Your Guessed Correct !");
console.log("Tries Taken:", tries)