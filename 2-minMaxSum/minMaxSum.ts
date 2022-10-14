function miniMaxSum(arr: number[]): void {
  // find min sum (dont sum max)
  // find max sum (dont sum min)
  //calculate max min digits
  const maxInt = Math.max(...arr);
  const minInt = Math.min(...arr);

  //sum
  let minCount = 0;
  let maxCount = 0;

  arr.forEach((i, index) => {
    maxCount += i;
    if (index + 1 === arr.length) {
      maxCount -= minInt;
      return maxCount;
    }
  });

  arr.forEach((i, index) => {
    minCount += i;
    if (index + 1 === arr.length) {
      minCount -= maxInt;
      return minCount;
    }
  });

  console.log(maxCount, minCount);
}

miniMaxSum([1, 2, 3, 4, 5]);
