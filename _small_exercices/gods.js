// CLASS of gods
const god = {
  _gods: [
    {
      name: "Ea",
      pantheon: "Mesopotamian",
      domain: ["Intelligence", "Wisdom", "Knowledge"]
    },
    {
      name: "Shamash",
      pantheon: "Mesopotamian",
      domain: ["Sun"]
    },
    {
      name: "Nergal",
      pantheon: "Mesopotamian",
      domain: ["Death", "Hell"]
    },
    {
      name: "Ningirsu",
      pantheon: "Mesopotamian",
      domain: ["War"]
    },
    {
      name: "Aton",
      pantheon: "Egyptian",
      domain: ["Sun"]
    }
  ],
  _battles: [
    {
      opponent: "Asag",
      warrior: "Ningirsu",
      outcome: "Asag lose and his stone armies are dispersed.",
      pantheon: "Mesopotamian",
    },
    {
      opponent: "Humbaba",
      warrior: "Gilgamesh",
      outcome: "Gilgamesh kills Humbaba with the help of Enkidu",
      pantheon: "Mesopotamian",
    }
  ],
  // GETTER for gods
  get gods() {
    return this._gods;
  },
  // GETTER for battles
  get battles() {
    return this._battles;
  },
  // METHOD for adding a god
  addGod(newName, newDomain, newPantheon) {
    let god = {
      name: newName,
      domain: newDomain,
      pantheon: newPantheon
    };
    this._gods.push(god);
  },
  // METHOD for adding a battle
  addBattle(newOpponent, newWarrior, newOutcome, newPantheon) {
    let battle = {
      opponent: newOpponent,
      warrior: newWarrior,
      outcome: newOutcome,
      pantheon: newPantheon
    };
    this._battles.push(battle);
  },
  // METHOD for retrieving gods by domains
    getGodsByDomain(domain) {
        return this._gods.filter(god => god.domain.includes(domain));
    },
};

/*

// LOGGING of the first arrays in the god CLASS
console.log(god.battles);
console.log(god.gods);
// Adding a new god and logging the result of the method
god.addGod("Kishar", ["Earth"], "Mesopotamian");
console.log(god.gods);
// Adding a new battle and logging the result of the method
god.addBattle("Tiamat", "Marduk", "Tiamat loses her fight against Marduk and her corpse become the sky and the soil.", "Mesopotamian");
console.log(god.battles);

*/

const godNames = god.gods.map(god => god.name);
const godDomains = god.gods.map(god => god.domain);
console.log(godNames);
console.log(godDomains);