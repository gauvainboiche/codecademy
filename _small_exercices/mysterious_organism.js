// Returns a random DNA base
function returnRandBase() {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single strand of DNA containing 15 bases
function mockUpStrand() {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Factory function to create a DNA specimen object
function pAequorFactory(specimenNumber, dnaArray) {
  return {
    _specimenNum: specimenNumber,
    _dna: dnaArray,

    get dna() {
      return this._dna;
    },

    get specimenNum() {
      return this._specimenNum;
    },

    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let indexToMutate = Math.floor(Math.random() * this._dna.length);
      const currentBase = this._dna[indexToMutate];

      // Filter out the current base to select a different one
      const otherBases = dnaBases.filter(base => base !== currentBase);
      const newBase = otherBases[Math.floor(Math.random() * otherBases.length)];

      // Update DNA at the selected index
      this._dna[indexToMutate] = newBase;

      return this._dna;
    },

    compareDNA(secondDNA) {
      let DNAsimilarities = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === secondDNA[i]) {
          DNAsimilarities++;
        }
      }
      const commonDNA = DNAsimilarities / 16 * 100; // the *100 is to calculate %age
      return(`The two DNA threads are ${commonDNA.toFixed(2)}% similar.`);
    }
    
  };
}

const pAequor1DNA = mockUpStrand();
const pAequor2DNA = mockUpStrand();
const pAequor1 = pAequorFactory(1, pAequor1DNA);
const pAequor2 = pAequorFactory(2, pAequor2DNA);


console.log(`
${pAequor1.dna}
${pAequor2.dna}`);

console.log(pAequor1.compareDNA(pAequor2.dna));