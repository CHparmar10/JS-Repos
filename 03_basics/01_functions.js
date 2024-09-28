// Function with Parameters

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    //console.log(num1 + num2);
    //let result = num1 + num2;
    //console.log("chirag");
    return num1 + num2;
    //console.log("chirag");
}

const result = addTwoNumbers(3,5)
console.log("Result : ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("chirag"));







/// Function with Objects

// Rest operator

function calculatecartPrice(...num1){
    return num1;
}

console.log(calculatecartPrice(200,300,400,500));

const user = {
    username: "chirag",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));