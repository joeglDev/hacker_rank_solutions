
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
    const sortedSticks = sticks.sort((a, b) => {return a - b});
 if (sortedSticks[0] + sortedSticks[1] <= sortedSticks[2]) {return [-1]}; 

 return [0]

};