let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//console.log(storyWords); // see the results of the new array created by .split()
//console.log(storyWords.join(" ")); // see the results of joining words again

// counting initial words in the debut string
let count = 0;
storyWords.forEach(word => count++);
//console.log(count);

// applying a filter to opt out "literraly"
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// applying a filter to correct any mispelled word
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }});

// applying a multi-method filter to snap any bad word
const badWordIndex = storyWords.findIndex(word => word === badWord);
//console.log(badWordIndex); // get the index position
//console.log(storyWords[78]); // check the index position
storyWords[badWordIndex] = "really"; // replace the bad word
//console.log(storyWords[78]); // check the new index position

// applying a simplification method to the text for stupid people
const lengthCheck = storyWords.every(word => word.length <= 10);
//console.log(lengthCheck);
storyWords = storyWords.map(word => {
  const replacingWord = "stunning";
  if (word.length > 10) {
    console.log(`----- The word ${word} will be replaced by ${replacingWord} -----
    `);
    return replacingWord;
  } else {
    return word;
  }});

console.log(storyWords.join(" "));