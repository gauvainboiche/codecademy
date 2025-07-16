const fs = require("fs");

fs.readFile("./dictionnaire_fr.txt", "utf8", parseFile);

function parseFile(err, data) {
    if (err) {
    console.error("Erreur de lecture du fichier :", err);
    return;
    }
    const words = data.split("\n").filter(word => word.trim() !== "");
    
    let wordNumber = Math.floor(Math.random() * 20 + 2);
    let randomMessage = [];

    for (let i = 0; i < wordNumber; i++) {
        const joiners = ["et", "ou", "alors", "mais", "donc", "car", "puis", "ensuite,", "toutefois,", "cependant,", "néanmoins,", "par conséquent", "ainsi,", "en outre", "de plus", "d'ailleurs,", "en effet", "par ailleurs"];        

        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        const randomJoiner = joiners[Math.floor(Math.random() * joiners.length)];
        
        randomMessage.push(randomWord, randomJoiner);
        }

    const warnings = ["ATTENTION !", "ALERTE !", "PRENEZ GARDE !", "PRUDENCE !"];
    const randomWarning = warnings[Math.floor(Math.random() * warnings.length)];

    // Capitalize the first word
    randomMessage[0] = randomMessage[0].charAt(0).toUpperCase() + randomMessage[0].slice(1);
    // Add a random warning at the beginning
    randomMessage.unshift(randomWarning);
    // Remove the last joiner
    randomMessage.pop();
    // Join the words into a single string
    console.log(`${randomMessage.join(" ")}.`);
}