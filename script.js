var wins = 0;
var ties = 0;
var losses = 0;

// User choices
var options = ["R", "P", "S"];

var playGame = function() {
    var userChoice = prompt("Enter R, P, or S:");

// If user pressed Cancel, immediately end function
if (!userChoice) {
    return;
}

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

alert("The computer chose " + computerChoice);

// Possible choice scenarios
if (userChoice === computerChoice) {
    ties++;
    console.log("It's a tie!");

} else if (
    (userChoice ==="R" && computerChoice ==="S") || 
    (userChoice ==="P" && computerChoice ==="R") || 
    (userChoice ==="S" && computerChoice ==="P"))
{
    wins++
    alert("You win!");

} else {
    losses++
    alert("You lost!");
}
// If user pressed OK, run the function again
  if (playAgain) {
    playGame();
}

alert("Stats:\nWins: "+ wins + losses + "\nLosses: " + ties);


var playAgain = confirm("Play again?");


if (playAgain) {
    playGame();
}
};

// Run the game for the first time
playGame();