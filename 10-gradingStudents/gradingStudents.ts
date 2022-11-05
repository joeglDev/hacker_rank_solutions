/*
0-100    <40 is fail

<38 auto fail

If the difference between the and the next multiple of is less than , round up to the next multiple of .
*/

function gradingStudents(grades: number[]): number[] {
  const gradesCopy = [...grades];
  gradesCopy.forEach((grade) => {
    if (grade < 38) {
      gradesCopy.splice(gradesCopy.indexOf(grade), 1);
    } else {
      for (let i = 1; i < 106; i++) {
        let count = grade + 1;
        if (count % 5 === 0) {
          let newGrade = count;
          if (newGrade - grade < 3) {
            gradesCopy.splice(gradesCopy.indexOf(grade), 1, newGrade);
          }
        }
      }
    }
    //get next multiple of 5
    // add onto grade
    //check if diff less than 3 if so return in place
  });

  return gradesCopy;
}

console.log(gradingStudents([4, 73, 67, 38, 33])); //75 67 40 33
