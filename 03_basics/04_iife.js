/// Immediately Invoked Function Expressions (IIFE)

// global scopes k polution se hoti hai problem kai bar to us global scope k variable declaration ko hata ne k liye IIFE ka Use karte hai.


// named IIFE
(function chai(){
    console.log(`DB Connected`);
})();


// Notes for Run both function we need closed first function using semicolan (;).

// unnamed IIFE
(
    (name,surname) =>{
        console.log(`DB Connected Two ${name} ${surname}`);
    }
)("chirag","parmar");

