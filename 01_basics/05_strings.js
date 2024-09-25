const name = "chirag";
const repocount = 50;

console.log(name + repocount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("chirag parmar")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('G')); 

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(-4,4)
console.log(anotherstring);

const trimString = "   chirag     "
console.log(trimString);
console.log(trimString.trim());


const replaceURLs = "https://chirag.com/chirag%2010";
console.log(replaceURLs.replace('%20','-'));

console.log(replaceURLs.includes('sundar'))

console.log(gameName.split(' '));
