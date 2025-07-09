const input = "Il existe une humilite naive, assez frequente en somme, qui, lorsqu’on la possede, vous rend, une fois pour toutes, impropre a etre disciple de la connaissance. Car, au moment ou un homme de cette espece aperçoit quelque chose qui le frappe, il se retourne en quelque sorte sur lui-meme et se dit : « Tu t’es trompe ! Ou avais-tu tes sens ! Cela ne peut pas etre la verite ! » — Et alors, au lieu d’y regarder encore une fois de plus pres, au lieu de preter encore l’oreille, il s’enfuit intimide et evite de rencontrer la chose frappante qu’il cherche a se sortir de la tete aussi vite que possible. Son canon interieur dit : « Je ne veux rien voir qui soit en contradiction avec l’opinion courante sur les choses ! Suis-je fait, moi, pour decouvrir des verites nouvelles ? Il y en a deja trop d’anciennes. » ";

const inputLowercase = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (const char of inputLowercase) {
  //console.log(char);
  for (const vowel of vowels) {
    //console.log(vowel);
    if (vowel === char) {
      if (vowel === "e" || vowel === "u") {
        resultArray.push(vowel); // Add an additionnal E or U if present on top of the other .push
      }
      resultArray.push(vowel); // Add a push() for every vowel, whatever it is
    }
  }
}

const formatedResultArray = resultArray.join("").toUpperCase();

console.log(formatedResultArray);