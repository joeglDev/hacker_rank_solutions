/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s: input array representing numbers
 *  2. INTEGER d: interger representing sum of elements in possible answer arr
 *  3. INTEGER m: integer representing length of possible answer arr
 *
 *  ie should find arrays of integer elements which sum to d and have length m
 *  then returns num of possible ans
 */

//uses a sliding window

  /**
   * Returns number of  subarrays of input array s which conform to length m and reduce to d.
   *
   *  @param {Array<number>} s Input array of integers.
   * @param {number} d Sum of valid sub arrays.
   * @param {number} m Length of valid sub arrays.
   * @return {number} count Number of valid sub arrays found.
   */
function birthday(s: number[], d: number, m: number): number {

    let sum: number;
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        //slices array to i <-> i + length i + m. Loop moves forward in index
        sum = s.slice(i, i + m).reduce((a: number, b: number)=> a + b);
        if (sum === d) {
            count++;
        }
    }
    return count; 
}

export default birthday;
