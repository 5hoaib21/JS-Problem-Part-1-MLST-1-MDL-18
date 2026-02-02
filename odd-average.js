function oddAvg(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0)
      // console.log(number);
      odds.push(number);
  }
  // console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avg = oddAvg(numbers);
console.log("average of the odd numbers is", avg);
