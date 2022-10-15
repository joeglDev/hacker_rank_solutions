//could refactor to be more dry
function breakingRecords(scores: number[]): number[] {
  let currentMax = scores[0];
  let currentMaxCount = 0;
  let currentMin = scores[0];
  let currentMinCount = 0;

  //calcuate minMax
  scores.forEach((score, index) => {
    if (score > currentMax) {
      currentMaxCount++;
      currentMax = score;
    } else if (score < currentMin) {
      currentMinCount++;
      currentMin = score;
    }

    if (index === scores.length - 1) {
      return currentMaxCount;
    }
  });

  scores.forEach((score, index) => {
    if (score < currentMin) {
      currentMinCount++;
      currentMin = score;
    }
    if (index === scores.length - 1) {
      return currentMinCount;
    }
  });

  return [currentMaxCount, currentMinCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
//expect 2 max 4 min
