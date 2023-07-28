const score = 400;

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())   //it will converted to string
// console.log(typeof balance)
// console.log(balance.toFixed(2))

const otherNumber = 145.256252
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))


// ************** Maths *********/

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,8,6,8))
console.log(Math.max(4,8,6,8))

console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min  + 1 ))+ min)