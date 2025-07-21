// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(array) {
  let newArray = [];
  let cardIssuer = "";
  switch (array[0]) {
    case 3 :
      cardIssuer = "American Express";
      break;
    case 4 :
      cardIssuer = "Visa";
      break;
    case 5 :
      cardIssuer = "Mastercard";
      break;
    case 6 :
      cardIssuer = "Discover";
      break;
    default :
      cardIssuer = "[UNKNOWN]";
      break;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    let currentPlace = array[i];
    // to see if the [i] is an even number in the array - so that the 2nd, 4th, 6th element of the array etc - and if so => Double the number
    if (i % 2 !== 0) {
      newArray.push(currentPlace);
      continue;
    }
    // if the double of the number is superior to 9, take the sum of the two numbers. Which is equivalent to substracting 9 to it curriously
    
    if (currentPlace * 2 > 9) {
      let twoNum = currentPlace * 2 - 9;
      newArray.push(twoNum);
    } else {
      newArray.push(currentPlace * 2);
    }    
    // add all the numbers
  }
  const sumUp = newArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  const isValid = sumUp % 10 === 0;
  const cardID = `${array.at(0)}${array.at(1)}${array.at(2)}X-XXXX-XXXX-X${array.at(-3)}${array.at(-2)}${array.at(-1)}`;
  console.log(`The credit card ${cardID} is issued by ${cardIssuer}.
It is ${isValid ? "a VALID" : "an INVALID"} credit card.
----------`);
  return isValid;
}

function findInvalidCards(nestedArray) {
  for (const array of nestedArray) {
    validateCred(array);
  }
}

findInvalidCards(batch);