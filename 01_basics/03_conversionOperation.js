//let score = 33
//let score = "33"
//let score = "33abc"
//let score = null
//let score = ""
//let score = undefined
let score = true

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/* 
    "33" => 33
    "33abc" => NaN
    "true" => 1; false => 0

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 
    1 => true; 0 => false
    "" => false
    "chirag" => true
*/

let SomeNumber = 33

let stringNumber = String(SomeNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))

console.log("1" + 2); // output - 12
console.log(1 + "2"); // output - 12
console.log("1" + 2 + 2); // output - 122
console.log(1 + 2 + "2"); // output - 32


// Read about prefix and Postfix
let gamecounter = 100
++gamecounter; // output - 101
//gamecounter++ // output - 101

// Link for read about prefix and postfix

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


