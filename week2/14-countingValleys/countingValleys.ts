/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
  let height = 0;
  let prevHeight = 0;
  let valleyCount = 0;

  const splitPath = path.split("");
  for (let i in splitPath) {
    //record prev step
    prevHeight = height;
    //height counts + 1 D or - 1 U to count height above sea level
    splitPath[i] === "D"
      ? (height -= 1)
      : splitPath[i] === "U"
      ? (height += 1)
      : null;

    // increment valley count when entering a valley
    if (height < 0 && valleyCount === 0) {
      valleyCount += 1;
    } else if (height < 0 && prevHeight === 0) {
      valleyCount += 1;
    }
  }

  return valleyCount;
}

console.log(countingValleys(8, "DDUUUUDD")); // 1
console.log(countingValleys(8, "UDDDUDUU")); // 1
console.log(countingValleys(8, "DDUUDDUU")); // 2
console.log(countingValleys(8, "DUDUDUDU")); // 4
