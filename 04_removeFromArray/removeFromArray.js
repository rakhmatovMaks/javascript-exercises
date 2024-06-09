const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(element => !valuesToRemove.includes(element));
} 

let array = [1, 2, 3, ];
let result = removeFromArray(array, '1', 3);
// Do not edit below this line
module.exports = removeFromArray;
