const name = "deepraj"
const repoCount = 50

// console.log(name +repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Deepraj-G")

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "    Deepraj   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://deepraj.com/deepraj%20gole"
console.log(url.replace('%20','-'));

console.log(url.includes('deep'));

console.log(gameName.split('-'));

