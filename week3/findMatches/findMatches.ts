
/**
 * Returns number of elements of an input array which form a matching pair.
 *
 *  @param {Array<number>} ar - Input array of numbers
 * @return {number} count Number of matching pairs found.
 */
function findMatches(ar: number[]): number {
  // get unique elements
  let uniqueArray = [...new Set(ar)];
  let count = 0;
  uniqueArray.forEach((element) => {
    //checks that pairs of matches are found
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
}

export { findMatches };
