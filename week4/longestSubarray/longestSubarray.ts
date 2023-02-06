/**
 * Given an array of integers, returns the longest subarray where the absolute difference between any two elements is less than or equal to 1.
 *
 * @param {number[]} a - input array to test.
 * @returns {number} maxLength - length of the largest subarray found.
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
    console.log(subArray);
    for (let i = index + 1; i < a.length; i++) {
      if (Math.abs(element - a[i]) <= 1) {
        subArray.push(a[i]);
      }
    }
    allSubArrays.push(subArray);
  });

  //check each arr in subarrays and if diff between elements is greater than 1 exclide
  allSubArrays.forEach((arr, arrIndex) => {
    arr.forEach((element, elementIndex) => {
      let checkValue = arr[0];
      if (
        Math.abs(element - arr[elementIndex + 1]) > 1 ||
        Math.abs(checkValue - arr[elementIndex + 1]) > 1
      ) {
        arr.splice(elementIndex + 1, 1);
      }
    });
  });

  let maxLength = 0;
  allSubArrays.forEach((arr) => {
    //loop through all subarrays and get largest
    if (arr.length > maxLength) {
      maxLength = arr.length;
    }
  });
  return maxLength;
}
