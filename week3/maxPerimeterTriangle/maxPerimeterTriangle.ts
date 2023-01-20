/**
 * Calculates the maximum perimeter of a non-degenerate triangle from an input array of numbers.
 *
 * @param {Array.<number>} sticks -  Array of numbers representing sides of a possible triangle.
 * @returns {Array.<number>} - Array of numbers representing the perimeter of a triangle.
 */
export const maxPerimeterTriangle = (sticks: number[]): number[] => {
  //return sum of sides length as arr in  on-decreasing order
  //else
  //Choose the one with the longest maximum side.
  //If more than one has that maximum, choose from them the one with the longest minimum side.
  //If more than one has that maximum as well, print any one them.

  // 1. Check if triangle is degenerate a + b >= c
  const sortedSticks = sticks.sort((a, b) => {
    return a - b;
  });
  if (sortedSticks[0] + sortedSticks[1] <= sortedSticks[2]) {
    return [-1];
  }

  //create possible triangles by rearranging array -> may not be needed if multiple triangles per array instead find triangle and push to arr
  let allTriangles: number[][] = [];
  const permute = (arr: any, m = []) => {
    if (arr.length === 0) {
      allTriangles.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
    return allTriangles;
  };

  permute(sticks);

  //calculate largest perimeter from all possible triangles
  let maxPerimeter = 0;
  allTriangles.forEach((triangle) => {
    const perimeter = triangle[0] + triangle[1] + triangle[2];
    if (perimeter > maxPerimeter) {
      maxPerimeter = perimeter;
    }
  });

  return [maxPerimeter];
};
