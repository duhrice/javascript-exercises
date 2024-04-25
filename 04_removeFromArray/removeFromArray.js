const removeFromArray = function(array, ...args) {
    const inputArray = array;

    for (const arg of args) {
        let repeatCount = 0;

        for (const item of inputArray) {
            if (item == arg) {
                repeatCount++;
            }
        }

        for (let i = 0; i < repeatCount; i++) {
            if (inputArray.indexOf(arg) == -1) {
                continue;
            } else {
                inputArray.splice(inputArray.indexOf(arg), 1)
            }
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
