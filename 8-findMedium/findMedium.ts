function findMedian(arr: number[]): number {
  const middleIndex = Math.floor(arr.length / 2);

  const sortedArr = arr.sort((a: number, b: number) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  const median = sortedArr[middleIndex];
  return median;
}

console.log(findMedian([5, 3, 1, 2, 4])); //3
console.log(findMedian([0, 1, 2, 4, 6, 5, 3])); //3
