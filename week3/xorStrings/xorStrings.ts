// true if and only if its arguments differ

function xorStrings(A: string, B: string): string {
  let xor = "";
  for (let i = 0; i < A.length; i++) {
    A[i] !== B[i] ? (xor += "1") : (xor += "0");
  }

  return xor;
}

function xorBitwise(A: number, B: number): number {
    const xor = A ^ B;
    
    return xor;
  }

export default {xorStrings, xorBitwise};
