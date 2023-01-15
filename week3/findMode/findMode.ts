// solution for hacker rank migratoryBirds problem see https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

interface modeHashMap  {
    [key: string]: number;
};


/**
 * Returns mode number of an input array; lowest number if multiple numbers have the same mode frequency.
 * 
 * @param {Array.<number>} arr - an input array of numbers.
 * 
 * @returns {number} maxKey - number representing the mode number of arr. Lowest number if more than one mode.
 */
function findMode(arr: number[]): number {
    //hashmap value : count
    //if found add one to count else make new key
    //select key value to return 

    const frequency: modeHashMap = {};
    arr.forEach((element) => {
        let initialFrequency = 1;
        if (!frequency[element]) {
            frequency[element] = initialFrequency;
        } else {
            frequency[element] += 1;
        }
    });
    
    const maxKey: number = parseInt(Object.keys(frequency).reduce((a, b) => frequency[a] >= frequency[b] ? a : b));

    return maxKey;

};

export {findMode};

