const add = function(add1, add2) {
	const addValue = add1 + add2;
  return addValue;
};

const subtract = function(sub1, sub2) {
	const subValue = sub1 - sub2;
  return subValue;
};

const sum = function(sumNumbers) {
  return sumNumbers.reduce((total,num) => total + num, 0);
};

const multiply = function(multNumbers) {
  return multNumbers.reduce((total,num) => total * num, 1);
};

const power = (base, exponent) => base ** exponent;

const factorial = function(n) {
	let result = 1;
  for (let i = 2; i<= n; i++) {
    result *=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
