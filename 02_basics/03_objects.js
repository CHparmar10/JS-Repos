// objects

// Notes
// We can declare object using two types 1) Litteral and 2) constructor

// singleton object (constructor)
// object.create

//Object literals
const mysym = Symbol("key1");

const jsUser = {
    name:"chirag",
    "fullname":"chirag parmar",
    [mysym]:"mykey1",
    age:30,
    location:"ahmedabad",
    email:"chirag@google.com",
    isloggedIn:false,
    LastloginDays:["Monday","Saturday"]
}
//console.log(jsUser);
//console.log(jsUser.email);
//console.log(jsUser["email"]);

jsUser.email = "chirag@chatgpt.com";
//Object.freeze(jsUser) // Notes - using "freeze()" we Unble to change value from "jsUser" object.
//jsUser.email = "chirag@microsoft.com";

//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



