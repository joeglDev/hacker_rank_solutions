function findMatches(ar: number[]): number {
  // get unique elements
  let uniqueArray = [...new Set(ar)];
  let count = 0;
  uniqueArray.forEach((element) => {
    let numberOf = 0;
    ar.forEach((number) => {
      if (number === element) {
        numberOf += 1;
        if (numberOf % 2 === 0) {
          count += 1;
        }
      }
    });
  });
  return count;
  /*
  //loop through array if match to index then add to holding arr and remove from arr
  //count subarrays in holding arr
  const inputArr = [...ar];
  const arLength = ar.length;
  let numberOfMatches = 0;
  for (let i = 0; i < arLength; i++) {
    let checkTwo = 0;
    for (let k = i + 1; k < arLength; k++) {
      if (inputArr[i] === inputArr[k]) {
        checkTwo += 1;
        if (checkTwo === 2) {numberOfMatches += 1;}
        
      }
    }
  }
  return numberOfMatches;
  */
}

export { findMatches };
