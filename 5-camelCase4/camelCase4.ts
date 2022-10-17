//refactor to make more DRY lots of repeated code

function processData(input: string) {
  const splitOrCombine = input[0];
  const dataType = input[2];
  const str = input.slice(4);

  //split
  if (splitOrCombine === "S") {
    const splitStrArr = str.split(/(?=[A-Z])/);
    splitStrArr.forEach((word, index) => {
      const letters = word.split("");
      letters[0] = letters[0].toLowerCase();
      word = letters.join("");
      splitStrArr[index] = word;
    });

    return splitStrArr.join(" ");
  }

  //combine
  if (splitOrCombine === "C") {
    const words = str.split(" ");
    if (dataType === "C") {
      words.forEach((word, index) => {
        const letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        word = letters.join("");
        words[index] = word;
      });
    } else if (dataType === "M") {
      words.forEach((word, index) => {
        if (index > 0) {
          const letters = word.split("");
          letters[0] = letters[0].toUpperCase();
          word = letters.join("");
          words[index] = word;
        }
        if (index === words.length - 1) {
          word += "()";
          words[index] = word;
        }
      });
    } else if (dataType === "V") {
      words.forEach((word, index) => {
        if (index > 0) {
          const letters = word.split("");
          letters[0] = letters[0].toUpperCase();
          word = letters.join("");
          words[index] = word;
        }
      });
    }

    const output = words.join("");
    return output;
  }
}

console.log(processData("S;V;iPad")); // i pad
console.log(processData("C;M;mouse pad")); //mousePad()
console.log(processData("C;C;code swarm")); //CodeSwarm
console.log(processData("S;C;OrangeHighlighter")); //orange highlighter
console.log(processData("C;V;camel case")); // camelCase
