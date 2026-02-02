// simple logic
function isLeapYear(year) {
  if (year % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const checkedYear = isLeapYear(2048);
console.log(checkedYear);

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const checkedYear1 = isLeapYear2(2100);
const checkedYear2 = isLeapYear2(2400);
const checkedYear3 = isLeapYear2(1900);
const checkedYear4 = isLeapYear2(2052);
// console.log(checkedYear1, checkedYear2, checkedYear3, checkedYear4);
