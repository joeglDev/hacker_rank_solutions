// true if and only if its arguments differ

function xorStrings(A: string, B: string): string {
  let xor = "";
  for (let i = 0; i < A.length; i++) {
    A[i] !== B[i] ? (xor += "1") : (xor += "0");
  }

  return xor;
}

export default xorStrings;
