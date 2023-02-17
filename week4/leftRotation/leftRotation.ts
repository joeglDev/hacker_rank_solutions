/**
 * Rotates numbers in an array by d places to the left and returns the new array.
 *
 * @param {number} d - THe number of places to shift elements of the array left by.
 * @param {number[]} arr - Input array of numbers to left shift.
 *
 * @returns {number[]} - Returned array of numbers shifted left by d places.
 *
 **/

export function rotateLeft(d: number, arr: number[]): number[] {
  // 1 - grab d first elements and save
  // 2 - grab remaining elements and save
  // 3 new arr and return

  const firstElements = arr.slice(0, d);
  const lastElements = arr.slice(d, arr.length);
  console.log(firstElements, lastElements);
  const leftShiftedArr = firstElements.concat(lastElements);

  return leftShiftedArr;
}
