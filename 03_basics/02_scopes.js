// scopes

// difference between let,const,var
//var c=300;                  // Gloabal scope
let a = 300;
if(true){                   // Block scope
    a=10;
    const b=20;
    var c=30;
}


console.log(a);
//console.log(b);
//console.log(c);

// {}  currely braces means scopes



// Nested Scopes
function one(){
    const username = "chirag";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); Error out of scope not access
    two();
}

one();

if(true){
    const username = "chirag";
    if(username === "chirag"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); errors
}
// console.log(username); errors


//***********************Interesting concepts***********************/

console.log(addone)
function addone(num){
    return num + 1;
}


// console.log(addTwo(5));  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 1;
}

console.log(addTwo(5));
