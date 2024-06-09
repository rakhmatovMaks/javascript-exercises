const fibonacci = function(countArg) {
    let count;
    if (typeof countArg !== "number") {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current  = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = secondPrev; 
    }
    return firstPrev;
}

console.log(current);

// Do not edit below this line
module.exports = fibonacci;
