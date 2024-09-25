// #Primitive Datatypes (Value Type)

/* 
There are 7 types of datatypes
1) String
2) Number,
3) Boolean,
4) null,
5) undefined,
6) Symbol (symbol is use for any specific value if we need to make unique then we can use symbol),
7) BigInt


Reference Type (Non primitive datatypes)
1) Array
2) Objects
3) Functions

questions
1) JavaScript is Dynamic type language or static type language?
=> JavaScript is a dynamically-typed language. This means that types are determined at runtime rather than at compile time. In dynamically-typed languages, 
   variables are not bound to a specific type, and you can assign different types of values to the same variable during the execution of the program. 
   
   For example:
    let variable = 42;         // variable is a number
    variable = "Hello World";  // now variable is a string

*/

// Symbol type example
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
console.log(id);
console.log(anotherid);

//const bigNumber = 3456543576654356754n // bigint datatypes

// Reference (Non Primitive)
// Array,objects,Functions

const heros = ["Shaktiman","naagraj","doga"] // Arrays
let myobj = {                                // objects
    name:"chirag",
    age:30,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherid);


// Notes - https://262.ecma-international.org/5.1/#sec-11.4.3 - For Read the Result of datatypes.


//****************************************************************Stack Memory & Heap Memory *************************************************************************/
// Stack(Primitive)  => Heap(Non-Primitive)

let myYoutubename = "chiragparmardotcom"
let anothername = myYoutubename

anothername = "chaiaurcode" 

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userone;

userTwo.email = "chparmar10@gmail.com";

console.log(userone.email)
console.log(userTwo.email)

