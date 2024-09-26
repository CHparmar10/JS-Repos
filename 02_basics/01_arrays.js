// array

const myArr = [0,1,2,3,4,5];
const myheros = ["Shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]); 

// Array Methods

// Notes -  Push() Method - Add value in array
myArr.push(6);
myArr.push(7);      
//console.log(myArr);

// Notes -  Pop() Method - remove last value in array

myArr.pop();
//console.log(myArr);

// Notes - unshift() Method - Add value in First Index of array and other value move to next index.

myArr.unshift(9);
//console.log(myArr);

// Notes - shift() Method - remove value which we add using unshift() method.

myArr.shift();
//console.log(myArr);


// Notes - Include() Method - check that value exists or not in array (Return value in true/false)

//console.log(myArr.includes(8));

// Notes - Indexof() Method - check that value exists or not in array (Return value if exists and if not exists then return -1)

//console.log(myArr.indexOf(3));

// Notes - join() Method - convert array into string.

const newArr = myArr.join();
//console.log(myArr);
//console.log(newArr);
//console.log(typeof myArr);
//console.log(typeof newArr);


// Notes - slice(),splice Method - 
// Slice() Metod is use for insert array in some specific location (Index).
// Splice() Metod is use for removed and/or replaced array in some specific location (Index).

//console.log("A",myArr);

const myn1 = myArr.slice(1,3)
//console.log(myn1);
//console.log("B",myArr);


const myn2 = myArr.splice(1,3)
//console.log("C",myArr);
//console.log(myn2);


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



