'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    //count elements
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    
    arr.forEach((element) => {
       return element > 0 ? posCount++ : element == 0 ? zeroCount++ : negCount++
    });
    
    const totalCount = negCount + zeroCount + posCount;

    //calculate ratios
    const posRatio:string = (posCount / totalCount).toFixed(6);
    const negRatio:string = (negCount / totalCount).toFixed(6);
    const zeroRatio:string = (zeroCount / totalCount).toFixed(6);
    
    //print
    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);
};

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}