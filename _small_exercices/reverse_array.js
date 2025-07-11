// Write your code here:

// the method .reverse() does it but is NOT allowed here

function reverseArray(array) {
  let newArray = [];
  for (const element of array) {
    newArray.unshift(element); // this will put every read element FIRST in the array
  }
  return newArray;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];