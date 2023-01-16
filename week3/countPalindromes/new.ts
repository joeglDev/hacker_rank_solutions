function countPalindromes(s: string): number {
  //variables
  let count = 0;

  //return array of all possible substrings of s
  const findSubstrings = (str: string): string[] => {
    const foundSubstrings = [];

    for (let i = 0; i < str.length; i++) {
      for (let k = i + 1; k < str.length + 1; k++) {
        foundSubstrings.push(str.slice(i, k));
      }
    }
    return foundSubstrings;
  };

  //reverse input string and return
  const reverse = (s:string) => {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
      o.push(s.charAt(len - i));
     return o.join('');
  }

  const allSubstrings = findSubstrings(s);
  //console.log("substrings",allSubstrings, allSubstrings.length);

  //check each substring for a palindrome
  allSubstrings.forEach((substring) => {
    const reversedSubString = reverse(substring);
    if (substring === reversedSubString) {
      //   console.log(substring, reversedSubString)
      count += 1;
    }
  });
  return count;
}




console.log(countPalindromes("aaa"));
console.log(countPalindromes("abccba"));
console.log(countPalindromes("daata"));

