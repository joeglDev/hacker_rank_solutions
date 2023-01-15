/**
 * Returns the input array arr permuted into a zigzag array.
 *  An array where numbers increase then decrease in size after index k by k = (n + 1) / 2. n = length of array.
 *
 * @param {Array.<number>} arr  - Input array of numbers.
 * @returns {Array.<number>} - Returns permuted array of numbers representing the zigzag array.
 */
export const zigzag = (arr: number[]): number[] => {
    //indexToDecreaseAfter 
    const k = (arr.length + 1) / 2;
    let lengthCount = arr.length;
    //sort by asc
    //select relevant number from start and move to end

    const sortedArr = arr.sort((a, b) => {return a - b});
    
  //pick first number and move to end until arr.length - k = 1
    while (lengthCount - k >= 1) {
        const selectedElement = sortedArr[0];
        sortedArr.splice(0, 1);
        sortedArr.push(selectedElement);
        lengthCount -= 1;
    }

  return sortedArr;
};
