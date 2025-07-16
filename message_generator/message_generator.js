const fs = require("fs");
fs.readFile("./dictionnaire_fr.txt", "utf8", (err, data) => {
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
    randomMessage.push(randomWord, joiners[Math.floor(Math.random() * joiners.length)]);
  }

    // Remove the last joiner
    randomMessage.pop();
    console.log(`Message généré : ${randomMessage.join(" ")}.`);
})