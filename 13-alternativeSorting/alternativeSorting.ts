//counts values in original arr with a sorting array
// arr = [0, 1, 1, 3, 2, 1]
// sort = [0, 3, 1, 1] // index of sort = value of arr and element of sort = frequency of element in arr

function countingSort(arr: number[]): number[] {
  const sortArr = [0];
  let sortArrCounter = 0;
  while (sortArrCounter < 99) {
    sortArr.push(0);
    sortArrCounter += 1;
  }

  arr.forEach((value) => {
    sortArr.splice(value, 1, sortArr[value] + 1);
  });

  return sortArr;
}

console.log(countingSort([1, 1, 3, 2, 1])); // [0, 3, 1, 1]
//console.log(countingSort([63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33 ]));
