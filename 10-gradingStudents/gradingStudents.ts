/*
0-100    <40 is fail

<38 auto fail

If the difference between the and the next multiple of is less than 3, round up to the next multiple of .
*/

function gradingStudents(grades: number[]): number[] {
  const gradesCopy = [...grades];
  console.log(gradesCopy);

  gradesCopy.forEach((grade, index) => {
    console.log("current", gradesCopy[index])
    console.log(gradesCopy)
    //remove grades < 38
    if (gradesCopy[index] < 38) {
      console.log("removing grade", grade);
      gradesCopy.splice(index, 1);
      
    } else {

      for (let i = 1; i < 101; i++) {
        let newGrade = i + gradesCopy[index ]
        console.log(grade, newGrade)
        if (newGrade % 5 === 0 && (newGrade - gradesCopy[index ] < 3)) {
          console.log("divides by 5", newGrade);
          gradesCopy.splice(index, 1, newGrade);
          break;
        }
      }
    }
  });
  return gradesCopy;
}

console.log(gradingStudents([4, 73, 67, 38, 33])); //4, 73, 67, 38, 33 => 75 67 40 33
