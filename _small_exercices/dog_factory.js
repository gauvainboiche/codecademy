// Write your code here:

function dogFactory(name, breed, weight) {
  if (typeof name !== "string") {
    return "Please provide a valid string for the NAME parameter.";
  } else if (typeof breed !== "string") {
    return "Please provide a valid string for the BREED parameter.";
  } else if (typeof weight !== "number") {
    return "Please provide a valid number for the WEIGHT parameter.";
  } else {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      // GETTER methods
      get name() { return this._name; },
      get breed() { return this._breed; },
      get weight() { return this._weight; },
      // SETTER methods
      set name(newName) { this._name = newName; },
      set breed(newBreed) { this._breed = newBreed; },
      set weight(newWeight) { this._weight = newWeight; },
      // ADDITIONNAL methods
      bark() { return(`ruff! ruff!`); },
      eatTooManyTreats() { this._weight++; }
    };
  }
}

const barney = dogFactory("Barney", "Bastard", 34);
// Print after creation
console.log(`Name   > ${barney.name}
Breed  > ${barney.breed}
Weight > ${barney.weight}
--------------------`);
// Name change and he ate too much !
barney.name = "Barnaby";
barney.eatTooManyTreats();
// Print of the changes
console.log(`Name   > ${barney.name}
Breed  > ${barney.breed}
Weight > ${barney.weight}
--------------------`);