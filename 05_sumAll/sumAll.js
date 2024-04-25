const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || num1 < 0 || !Number.isInteger(num2) || num2 < 0) {
        return 'ERROR';
    } else {
        // Sum of Integers formula: S = n(a + l)/2
        // S = total sum
        // n = # of integers
        // a = first term
        // l = last term
        return ((Math.abs(num1 - num2) + 1) * (num1 + num2)) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
