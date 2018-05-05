var wins = 0;
var loss = 0;
var guessRemaining = 9;
var lettersGuessed = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

$(document).ready(function() {
    document.onkeyup = function(event) {

    function reset() {
        guessRemaining = 9;
        lettersGuessed = [];
        computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        $("#userGuess").text("Letters Guessed: ");
}

        var userGuess = event.key;
        lettersGuessed.push(userGuess);

        var targetDiv = $("#userGuess");
        
        if(computerChoices.indexOf(userGuess) < 0 || computerChoices.indexOf(userGuess) > 25) {
            alert("Please input a valid letter!");
        }
        else {

        if(userGuess === computerGuess) {
            wins++;
            // reset();
        }
        else {
            guessRemaining--;
        }
        
        if(guessRemaining === 0) {
            loss++;
            reset();
        }

        $("#guessCounter").text("Guesses Left: " + guessRemaining);
        $("#userWins").text("Wins: " + wins);
        $("#userLoss").text("Losses: " + loss);
        targetDiv.append(userGuess + ", ");
        
        }
    }
});