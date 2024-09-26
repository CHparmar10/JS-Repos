// Notes - Concat() method is use for join to array into new signle array.
// Concat()

const marvel_heros = ["thor","IronMan","spiderMan"];
const dc_heros = ["superman","batman","flash"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

const allheros = marvel_heros.concat(dc_heros);
//console.log(allheros);

// Notes - Spread() Method - method is use for join to array into new signle array.
// Notes - Concate() and Spread() method both are same work.
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


// Notes - flat() Method - flat() method is use for array into array convert into single array.
 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
//const real_another_array = another_array.flat(2);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("chirag"));
console.log(Array.from("chirag"));
console.log(Array.from({name:"chirag"})) // Interesting array becuase it will return empty array


// Return set of elements to include in the new array object.

let score1 = 100;score2 = 200;score3 = 300;
console.log(Array.of(score1,score2,score3));