function diagonalDifference(arr: number[][]): number {
  let numArrays = arr.length;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let count = 0;

  while (numArrays > 0) {
    primaryDiagonal += arr[count][count];

    secondaryDiagonal += arr[numArrays - 1][count];
    numArrays--;
    count++;
  }

  const absoluteDifference = Math.abs(primaryDiagonal - secondaryDiagonal);
  return absoluteDifference;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); //15
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); //15
