var words = ["family", "brother", "cheesecake", "music", "son", "soda", "candy", "jerky", "pizza", "pray", "meditation", "technology", "computer", "school", "children", "sausage", "father", "church", "hamburger", "meh", "stegosaurus", "guitar", "defenestration", "flatulence", "proctology", "sushi", "corpulent", "game", "book", "play", "chicken", "whale", "pool", "swim", "philosophy", "meat", "potato", "comic", "laughter", "arcade", "read", "drive", "work", "sing", "movie", "fun", "silly", "belch", "tickle", "messy", "tired", "hungry", "cat", "dog", "cool", "slow"];

function Game() {
    var word;
    var hits=0;
    var overallHits=0;
    var wins=0;
    var losses=0;
    var hidden = [];
    var mistakes=0;
    var alpha = [];
    var repeats=0;

    word = words[Math.floor(Math.random()*words.length)];
    for (let i=0; i < word.length; i++){
        hidden.push("_");
    }

    document.getElementById("currentWord").textContent = hidden.join("");
    document.getElementById("gamePrompt").textContent = "Guess a letter! Mess up 10 times and you lose!";
    document.getElementById("mistakes").textContent = "Mistakes = " + mistakes;
    document.getElementById("wins").textContent = "Wins = " + wins;
    document.getElementById("losses").textContent = "Losses = " + losses;
    
    window.addEventListener ("keydown", function(guess){
        alpha.push(guess.key);
        for (let i=0; i < alpha.length; i++) {
            if (guess.key===alpha[i]) {
                repeats++;
            }
        }
        for (let i=0; i < word.length; i++) {
            if (guess.key===word[i] && repeats<2){
                hidden[i] = guess.key;
                hits++;
                overallHits++;
            }
        }
        document.getElementById("currentWord").textContent = hidden.join("");
        if (hits==0){
            mistakes++;
            hits=0;
            repeats=0;
            document.getElementById("mistakes").textContent = "Mistakes = " + mistakes;
            if (mistakes==10){
                losses++;
                gameReset();
            }
        }
        else if (overallHits == word.length) {
            wins++;
            gameReset();
        }
        else {
            repeats=0;
            hits=0;
        }
    });

    function gameReset() {
        hits=0;
        overallHits=0;
        hidden = [];
        mistakes=0;
        alpha = [];
        repeats=0;

        word = words[Math.floor(Math.random()*words.length)];
        for (let i=0; i < word.length; i++){
            hidden.push("_");
        }

        document.getElementById("currentWord").textContent = hidden.join("");
        document.getElementById("mistakes").textContent = "Mistakes = " + mistakes;
        document.getElementById("wins").textContent = "Wins = " + wins;
        document.getElementById("losses").textContent = "Losses = " + losses;
    }
}