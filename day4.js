const arrays = callback => {
  let doubleDigitsNumbers = [];
  for (let i = 197487; i < 673251; i++) {
    let checker = [];
    i.toString()
      .split('')
      .map(digit => {
        if (
          checker.filter(check => check === digit).length === 1 &&
          !doubleDigitsNumbers.includes(i)
        ) {
          doubleDigitsNumbers.push(i);
          checker.push(digit);
        }
        // part 2
        // else if (
        //   checker.filter(check => check === digit).length > 1 &&
        //   doubleDigitsNumbers.includes(i)
        // )
        //   doubleDigitsNumbers.splice(doubleDigitsNumbers.indexOf(i), 1);
        else checker.push(digit);
      });
  }
  callback(doubleDigitsNumbers);
};

const answer = arr => {
  console.log(
    arr.filter(number => {
      for (let i = 0; i < number.toString().split('').length; i++) {
        if (
          Number(number.toString().split('')[i]) >
          Number(number.toString().split('')[i + 1])
        )
          return false;
      }
      return number;
    }).length
  );
};

arrays(answer);
