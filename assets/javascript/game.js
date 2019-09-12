var words = ["meh", "stegosaurus", "echo", "defenestration", "flatulence", "proctology"];

function Game() {
    var word = words[Math.floor(Math.random()*words.length)];
    console.log(word)
    var hidden = "";
    var overallHits = 0;
    var wrongAnswers=0;

    for (let i=0; i < word.length; i++){
        hidden = hidden + "_";
    }

    document.getElementById("currentWord").textContent = hidden;

    
        document.getElementById("gamePrompt").textContent = "Guess a letter!";
        window.addEventListener ("onkeydown", function(guess){
            var hits = 0;
            for (let i=0; i < word.length; i++) {
                if (guess.key===word[i]){
                    hidden[i] = guess.key;
                    hits++;
                    overallHits++;
                }
            }
            document.getElementById("currentWord").textContent = hidden;
            if (hits > 0) {
                document.getElementById("gamePrompt").textContent = "Nice! Try again!";
            }
            else {
                document.getElementById("gamePrompt").textContent = "Wrong! Try again!";
                wrongAnswers++;
            }
        });
    
    return wrongAnswers;
}