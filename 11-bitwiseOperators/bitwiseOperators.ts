//note js stores numbers as 64 bits when doing bitwise opertions
// 64 -> 32 bits for operations -> 64 bits

function flippingBits(n: number): number {
    // to base 2
    let rawBaseTwo = (n >>> 0).toString(2);
    //to 32 bits 
    //get length 2 add on extra 0s to front
    const length = rawBaseTwo.length;
    let bitsToAdd = 32 - length;
        while (bitsToAdd > 0) {
            rawBaseTwo = "0" + rawBaseTwo
            bitsToAdd -= 1;
        }
    //flip each bit and convert back to base 10 num
    return 1

}

console.log(flippingBits(9))