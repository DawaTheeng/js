const name = "dawa"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('dawac')

console.log(gameName[0]);
console.log(gameName.__proto__); //promotype


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 2)  //slice => Negative value
console.log(anotherString);

const newStringOne = "   dawa   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dawa.com/dawa%20tamang"

console.log(url.replace('%20', '-'));

console.log(url.includes('dawa'));

console.log(gameName.split('-'));
