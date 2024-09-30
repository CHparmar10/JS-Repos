const user = {
    username: "chirag",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

//user.welcomeMessage();
//user.username = "chiragParar";
//user.welcomeMessage();

// console.log(this); result - empty

function oneFunc(params) {
    let username = "chirag";
    console.log(this.username);
}

oneFunc();

const oneFunction = function(){
    let username = "chirag";
    console.log(this.username);
}
oneFunction()

// Arrow function

const addTwo = (num1,num2) => {
    return num1 + num2; // explict return
}

// const addTwoF = (num1,num2) => num1 + num2; // We need to must return value while use this arrow function(without curly bracket arrgument).
const addTwoF = (num1,num2) => (num1 + num2);   //  not need to return value while use this way to use arrow function.   // implicit return
const addTwoFnc = (num1,num2) => ({username:"chirag"});
console.log(addTwoFnc(3,4))

