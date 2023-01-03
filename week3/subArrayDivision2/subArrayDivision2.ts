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

function birthday(s: number[], d: number, m: number): number {
  const possibleAnswers: number[][] = [];

  const findElementsWhichSum = (arr: number[], sum: number, maxLength: number) => {
    //get max,  sum to running total, check running total; = sum, check length
    //if correct add to possibleAnswers arr
  };

  const numberOfPossibleAnswers: number = possibleAnswers.length;

  return numberOfPossibleAnswers;
}

export default birthday;
