const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnString = function (str) {
  str = 'abc123';
  return str;
};

const addition = function (a,b) {
  return a + b;
};

const subtraction = function (a,b) {
  return a - b;
};

const multiplication = function (a,b) {
  return a * b;
};

const division = function (a,b) {
  return a / b;
};

const returnArray = function (arr) {
  return arr;
};

const returnFirstIndex = function (arr) {
  return arr[0];
};

const returnSecondIndex = function (arr) {
  return arr[1];
};

const returnArrayLength = function (arr) {
  return arr.length;
};

const arraySum = function (arr) {
  return arr.reduce((a,b) => a + b, 0);
};

const arraySubtraction = function (arr) {
  return arr.reduce((a,b) => a - b, 0);
};

const multiplicationArray = function (arr) {
  return arr.reduce((a,b) => a * b, 1);
};

const divisionArray = function (arr) {
return Number(arr.reduce((a,b) => parseFloat(a / b, 1).toFixed(3)));
};

const oddArray = function (arr) {
  return arr.filter((num) => num % 2 !== 0);
};

const evenArray = function (arr) {
return arr.filter((num) => num % 2 === 0);
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
