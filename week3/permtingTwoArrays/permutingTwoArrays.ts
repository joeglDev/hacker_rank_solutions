// rearrange each array so that A'[i] + B'[i] >= k

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

export function permutingTwoArrays(
  k: number,
  A: number[],
  B: number[]
): string {
  // sort into desc order
  // check each in a loop >= k
  // if so YES if not NO

  let outcome = "YES";
  const sortedA = A.sort((a, b) => {
    return a - b;
  });
  const sortedB = B.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] + sortedB[i] >= k) {
    } else {
      outcome = "NO";
    }
  }
  return outcome;
}
