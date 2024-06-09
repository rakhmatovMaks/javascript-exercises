const reverseString = function(str) {
   return str.split('').map(word => word.split('').reverse().join('')).join('');
};

let result = reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
