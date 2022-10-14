function timeConversion(s: string): string {
  const text = s.slice(8);
  let hours: string | number = s.slice(0, 2);
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);

  //convert 12 -> 24 hour
  if (text === "PM" && parseInt(hours) < 12) {
    hours = parseInt(hours) + 12;
  } else if (text === "AM" && parseInt(hours) === 12) {
    hours = "00";
  }

  //create 24 hour time
  const convertedTime = `${hours}:${minutes}:${seconds}`;
  return convertedTime;
}

console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("11:05:45AM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:01:01PM"));
console.log(timeConversion("12:01:01AM"));
