function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;
  ar.forEach((value, index) => {
    //arr replaced with n
    for (let i = index + 1; i <= n; i++) {
      // arr.length -> n
      if ((value + ar[i]) % k === 0) {
        count++;
      }
    }
  });
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); //5
