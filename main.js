// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
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

const pAequorFactory = (specimenNum, dna) =>{
  return{
    specimenNum,
    dna,
    mutate(){
      //console.log(arr);
      let newBase = returnRandBase();
      //let randBase = returnRandBase();
      const randIndex = Math.floor(Math.random() * this.dna.length);
      console.log(randIndex, newBase)
      while(this.dna[randIndex] === newBase){
        newBase = returnRandBase();
      console.log('samebase');
      }
      console.log('new base')
    }
  }
}

//console.log(pAequorFactory(1,mockUpStrand()))
pAequorFactory(1,mockUpStrand()).mutate();





