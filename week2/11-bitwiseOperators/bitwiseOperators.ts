//note js stores numbers as 64 bits when doing bitwise opertions
// 64 -> 32 bits for operations -> 64 bits

function flippingBits(n: number): number {
  // to base 2
  let rawBaseTwo = (n >>> 0).toString(2);
  //convert to 32 unsighted bits
  let bitsToAdd = 32 - rawBaseTwo.length;
  while (bitsToAdd > 0) {
    rawBaseTwo = "0" + rawBaseTwo;
    bitsToAdd -= 1;
  }
  //flip each bit and convert back to base 10 num
  const unsightedBitsArr = rawBaseTwo.split("");
  const flippedUnsightedBitsArr = unsightedBitsArr.map((bit) => {
    return bit === "0" ? "1" : "0";
  });
  const outputInt = parseInt(
    parseInt(flippedUnsightedBitsArr.join(""), 2).toString(10)
  );
  return outputInt;
}

console.log(flippingBits(2147483647)); //2147483648
console.log(flippingBits(1)); //4294967294
console.log(flippingBits(0)); //4294967295

const a = 1; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// expected output: -6

console.log(~b); // 00000000000000000000000000000010
// expected output: 2
