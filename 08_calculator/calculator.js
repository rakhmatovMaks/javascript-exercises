const add = function(num1, num2 ) {
	return num1 + num2;
};

add(2, 6);

const subtract = function(num1, num2) {
  return num1 - num2;
};

subtract(10, 4);

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

sum([1, 3, 5, 7, 9]);

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

multiply([2, 4, 6, 8, 10, 12, 14]);

const power = function(int, exponent) {
	return Math.pow(int, exponent)
};

power(4, 3);

const factorial = function(n) { 
	if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 1;
  }
  return n === 1 ? 1 : n * this.factorial(n - 1);
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
