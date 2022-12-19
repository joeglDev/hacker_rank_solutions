/*
0-100    <40 is fail

<38 auto fail

If the difference between the and the next multiple of is less than 3, round up to the next multiple of .
*/

function gradingStudents(grades: number[]): number[] {
  const newGrades: number[] = [];

  grades.forEach((grade) => {
    const getNextMultipleOf5 = (number: number) => {
      let count = 0;
      while ((number + count) % 5 !== 0) {
        count++;
      }
      const roundedToNextMultipleOf5 = number + count;
      return roundedToNextMultipleOf5;
    };

    //if diff between grade and next multiple of 5 is less than 3 round up and push to arr
    //calc next multiple of 5
    //compare diff and if less than 3 round up
    //else push to arr
    if (grade >= 38) {
      const nextMultipleOf5 = getNextMultipleOf5(grade);
      if (nextMultipleOf5 - grade < 3) {
        newGrades.push(nextMultipleOf5);
      } else {
        newGrades.push(grade);
      }
    }
  });

  return newGrades;
}

console.log(gradingStudents([4, 73, 67, 38, 33])); //4, 73, 67, 38, 33 => 75 67 40 33
console.log(gradingStudents([2, 37, 38])); // 40, 38