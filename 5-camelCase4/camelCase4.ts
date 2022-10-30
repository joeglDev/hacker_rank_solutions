function processData(input: string) {
  const eachInput = input.split("\r\n");

  const editedInputs = eachInput.map((input) => {
    if (input[0] === "S") {
      input = input.slice(4);
      const splitInput = input.split(/(?=[A-Z])/).join(" ");
      let output = splitInput.toLowerCase();
      output = output.replace(/[()]/g, "");
      return output;
    } else if (input[0] === "C") {
      if (input[2] === "M") {
        input = input.slice(4);

        const arrInput = input.split(" ").map((word, index) => {
          if (index == 0) {
            return word;
          } else if (index > 0) {
            const firstChar = word[0].toUpperCase();
            word = firstChar + word.slice(1);
            return word;
          }
        });
        const output = arrInput.join("") + "()";
        return output;
      } else if (input[2] === "C") {
        input = input.slice(4);
        const arrInput = input.split(" ").map((word) => {
          const firstChar = word[0].toUpperCase();
          word = firstChar + word.slice(1);
          return word;
        });
        const output = arrInput.join("");
        return output;
      } else if (input[2] === "V") {
        input = input.slice(4);
        const arrInput = input.split(" ").map((word, index) => {
          if (index == 0) {
            return word;
          } else if (index > 0) {
            const firstChar = word[0].toUpperCase();
            word = firstChar + word.slice(1);
            return word;
          }
        });
        const output = arrInput.join("");
        return output;
      }
    }
  });

  const output = editedInputs.join("\r\n");
  return output;
}

console.log(
  processData(
    "S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter"
  )
);

console.log(
  processData(
    "C;V;can of coke\r\nS;M;sweatTea()\r\nS;V;epsonPrinter\r\nC;M;santa claus\r\nC;C;mirror"
  )
);
