function pangrams(s: string): string {
  const alphabet: any = {};
  const splitInput = s.split("");

  //for each character 
  //checks is a letter
  //checks if present in alphabet hashmap if not adds as a new key
  splitInput.forEach((char) => {
    const capitalChar = char.toUpperCase();
    if (/[A-Z]/.test(capitalChar)) {
      if (!alphabet[capitalChar]) {
        alphabet[capitalChar] = true;
      }
    }
  });
  //outside of loop checks that alphabet length is present
  if (Object.keys(alphabet).length === 26) {
    return "pangram";
  }
  return "not pangram";
}

export default pangrams;
