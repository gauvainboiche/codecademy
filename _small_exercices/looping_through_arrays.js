const vacationSpots = ['Bali', 'Paris', 'Tulum'];
const bestVacationSpots = ["Pyongyang", "Caracas", "Beijing", "Havana", "Ho-Chi-Minh ville"];

// Write your code below

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

console.log("----------");

for (const city of vacationSpots) {
  console.log(`I would love to visit ${city}`);
}

console.log("----------");

function cityTravelling(array) {
  for (const item of array) {
    console.log(`I would love to visit ${item}`);
  }
}

cityTravelling(vacationSpots);
console.log("----------");
cityTravelling(bestVacationSpots);