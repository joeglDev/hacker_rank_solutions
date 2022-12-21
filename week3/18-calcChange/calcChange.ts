module.exports = function getDominations(amount:number) {
    //local variables
    let amountInPence = Math.round(amount * 100);
    const changeArr = [];
    const changeMap: any = {
      "£2": 0,
      "£1": 0,
      "50p": 0,
      "20p": 0,
      "10p": 0,
      "5p": 0,
      "2p": 0,
      "1p": 0,
    };
  
    while (amountInPence > 0) {
     console.log(amountInPence, amount *100)
      if (amountInPence - 200 >= 0) {
        amountInPence -= 200;
        changeMap["£2"] += 1;
      } else if (amountInPence - 100 >= 0) {
        amountInPence -= 100;
        changeMap["£1"] += 1;
      } else if (amountInPence - 50 >= 0) {
        amountInPence -= 50;
        changeMap["50p"] += 1;
      } else if (amountInPence - 20 >= 0) {
        amountInPence -= 20;
        changeMap["20p"] += 1;
      } else if (amountInPence - 10 >= 0) {
        amountInPence -= 10;
        changeMap["10p"] += 1;
      } else if (amountInPence - 5 >= 0) {
        amountInPence -= 5;
        changeMap["5p"] += 1;
      } else if (amountInPence - 2 >= 0) {
        amountInPence -= 2;
        changeMap["2p"] += 1;
      } else if (amountInPence - 1 >= 0) {
        amountInPence -= 1;
        changeMap["1p"] += 1;
      }
    }
  
    //generate returned arr
    for (let key in changeMap) {
      changeArr.push(changeMap[key]);
    }
  
    return changeArr;
  };