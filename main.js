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

// Factory function that creates a new organism
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
      const matchingBase = this.dna.reduce((previous, current, index, arr) => {
       if (arr[index] === dnaObj.dna[index]){
         return previous + 1
       }else {
         return previous
       }
      }, 0 );
     total = ((matchingBase / this.dna.length) * 100).toFixed(2);
      console.log(`${this.specimanNum} and ${dnaObj.specimanNum} have ${total}% DNA in common.`);
     },
     willLikelySurvive(){
        const totalMatches = this.dna.filter(base => base === 'G' || base === 'C')
        if (((totalMatches.length / this.dna.length) * 100) >= 60 ){
          return true;
        }
     },
   };
 };


 /*
 // this was all used for testing purposes to ensure functions worked properly once implemented
const ex1 = ["C", "C", "A", "G"];
const ex2 = ["C", "A", "T", "T"];


pAequorFactory(1, mockUpStrand()).mutate();
pAequorFactory(1, ex1).compareDNA(pAequorFactory(2, ex2));
pAequorFactory(1, ex1).willLikelySurvive();
*/

// Creating a simulation that creates 30 instances of pAequor that can survive in their natural env and store them into an array
let newStrands = [];
let strandCounter = 0;

while(newStrands.length < 30){
  let currentOrg = pAequorFactory(strandCounter, mockUpStrand())
  if (currentOrg.willLikelySurvive() === true){
    newStrands.push(`Speciman Number: ${currentOrg.specimanNum}, DNA Strand: ${currentOrg.dna}`);
  };
  strandCounter++;
};

console.log(newStrands);