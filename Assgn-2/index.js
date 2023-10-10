
const math = require('./math.js'); // the requires functions bellow to use math.funtionName for any function in math.js
// const {add,subtract, multiply, divide} = require('./math.js'); this requires functions bellow to use functionName for any function in math.js

//to use npm files do npm init
//name the folder modules or anything  give it a description and entry point,leave rest blank or auto and yes

//after installing lodash can change the top like to require('lodash'); and math to _ or anything else and then can use _.functionName for any function in lodash or the destructured version like {add, subtract, multiply, divide} = require('lodash'); and then can use functionName for any function in lodash}



function doclcalculations (num1, num2) {
    const sum = math.add(num1,num2);
    const diff = math.subtract(num1, num2);
    const prod = math.multiply(num1, num2);
    const div = math.divide(num1, num2);

    console.log("sum is " + sum);
    console.log("difference is " + diff);
    console.log("product is " + prod);
    console.log("division is " + div);   
    console.log("done");
}

console.log(math)

doclcalculations(10, 5);


