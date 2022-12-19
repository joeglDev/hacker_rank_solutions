//count occurences in input arr
//if not in unique push to unique
//if duplicate remove from unique

function lonelyInteger(a: number[]): number {
  const unique: number[] = [];

  a.forEach((int) => {
    if (!unique.includes(int)) {
      unique.push(int);
    } else {
      const indexToRemove = unique.indexOf(int);
      unique.splice(indexToRemove, 1);
    }
  });
  return unique[0];
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
