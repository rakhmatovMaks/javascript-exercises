HEAD
const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(element => !valuesToRemove.includes(element));
} 

const removeFromArray = function() {
};2154dcec4a4917ef3879edea0e290b20f289537e

let array = [1, 2, 3, ];
let result = removeFromArray(array, '1', 3);
// Do not edit below this line
module.exports = removeFromArray;
