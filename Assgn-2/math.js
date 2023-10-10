

/* 
exports.add = function (num1, num2) {
    return num1 + num2;
}

exports.subtract = function (num1, num2) {
    return num1 - num2;
}

exports.multiply = function (num1, num2) {
    return num1 * num2;
}

exports.divide = function (num1, num2) {
    return num1 / num2;
}

*/

//can do exports.add = add; and so on for each function
//or can do mpdules.exports = {add, subtract, multiply, divide}; and done need exports. in front of each function but need to make them objects const add, const subtract, etc.



const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

mpdule.exports = {
    add,
    subtract,
    multiply,
    divide
};