// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      let newBase = returnRandBase();
      const randIndex = Math.floor(Math.random() * this.dna.length);
      console.log(randIndex, newBase);
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(dnaObj) {
      let total = 0;
      let count = 0;
      for (let i = 0; dnaObj.length > i; i++) {
        if (this.dna[i] === dnaObj[i]) {
          count++;
        }
      }
      total = ((count / this.dna.length) * 100).toFixed(2);
      console.log(`${this.specimanNum} and ${dnaObj.specimanNum} have ${total}% DNA in common.`);

    },
  };
};

const ex1 = ["A", "C", "T", "G"];
const ex2 = ["C", "A", "T", "T"];

//console.log(pAequorFactory(1,mockUpStrand()))
pAequorFactory(1, mockUpStrand()).mutate();
pAequorFactory(2, ex1).compareDNA(ex2);

