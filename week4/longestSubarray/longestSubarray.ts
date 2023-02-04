/**
 * Given an array of integers, returns the longest subarray where the absolute difference between any two elements is less than or equal to 1.
 *
 * @param {number[]} a - input array to test.
 * @returns {number}  - length of the largest subarray found.
 */
export function pickingNumbers(a: number[]): number {
  //loop through each element of the array
  //assign element to var

  //loop though +1 and assign to sub array if meets condition

  //vars
    const allSubArrays: number[][] = [];

  //logic
  a.forEach((element, index) => {
    const subArray = [];
    subArray.push(a[index]);
    for (let i = index; i < a.length; i++) {
      if (Math.abs(element - a[i]) <= 1) {
        subArray.push(a[i]);
      }
    }
    allSubArrays.push(subArray);
  });

  //loop through all subarrays and get largest
  let maxLength = 0;
  allSubArrays.forEach((arr) => {
    if (arr.length > maxLength) {maxLength = arr.length}
  })
  console.log(maxLength)
  return maxLength;
}
