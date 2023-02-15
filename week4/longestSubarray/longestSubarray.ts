/**
 * Given an array of integers, returns the longest subarray where the absolute difference between any two elements is less than or equal to 1.
 *
 * @param {number[]} a - input array to test.
 * @returns {number} maxLength - length of the largest subarray found.
 */
export function pickingNumbers(a: number[]): number {
  a.sort((l, m) => m - l);
  let max = 0;

  for (let i = 0; i < a.length - 1; i++) {
    let count = 0;
    for (let j = i; j < a.length; j++) {
      if (a[i] - a[j] <= 1) {
        count++;
        if (count > max) {max = count};
      } else count = 0;
    }
  }
  return max;
}
