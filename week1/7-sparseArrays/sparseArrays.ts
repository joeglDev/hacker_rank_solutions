function matchingStrings(strings: string[], queries: string[]): number[] {
  const counters: number[] = [];
  //for each query create counter
  //loop through strings and count
  //return count arr
  queries.forEach((query) => {
    let count = 0;
    strings.forEach((str) => {
      if (query === str) {
        count++;
      }
    });
    counters.push(count);
  });

  return counters;
}

const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];
console.log(matchingStrings(strings, queries)); // [2, 1, 0]
