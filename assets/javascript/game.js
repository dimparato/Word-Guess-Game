var words = ["meh", "stegosaurus", "echo", "defenestration", "flatulence", "proctology"];

function Game() {
    var word;
    var overallHits=0;
    var wins=0;
    var losses=0;
    var hidden = [];

    function resetGame(){
        var mistakes = 0;

        word = words[Math.floor(Math.random()*words.length)];
        for (let i=0; i < word.length; i++){
            hidden.push("_");
        }
        document.getElementById("currentWord").textContent = hidden.join("");
        document.getElementById("gamePrompt").textContent = "Guess a letter! Mess up 5 times and you lose!";
        document.getElementById("mistakes").textContent = "Mistakes = " + mistakes;
        document.getElementById("wins").textContent = "Wins = " + wins;
        document.getElementById("losses").textContent = "Losses = " + losses;
    }
    resetGame();
    window.addEventListener ("keydown", function(guess){
        for (let i=0; i < word.length; i++) {
            var hits=0
            if (guess.key===word[i]){
                hidden[i] = guess.key;
                hits++;
                overallHits++;
            }
        }
        document.getElementById("currentWord").textContent = hidden.join("");
        if (overallHits > word.length) {
            document.getElementById("gamePrompt").textContent = "Congrats! A winner is you! :-)";
            losses++;
            resetGame();
        }
        else if (hits==0 && wrongAnswers<5) {
            document.getElementById("gamePrompt").textContent = "Keep Trying!";
            mistakes++;
        }
        else {
            document.getElementById("gamePrompt").textContent = "Sorry! Game over! :-(";
            wins++;
            resetGame();
        }
    });
}