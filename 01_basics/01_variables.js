const accountId = 10232
let accountEmail = "chiragparmar10@gmail.com"
var accountPassword = "123450"
accountcity = "Jaypur"

let accountState;
// accountId = 15305 // not allwed to change const variable value
console.log(accountId);


/*
prefer not to use var 
becuase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])