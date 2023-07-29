// array 
const myArray = [0,1,2,3,4,5]
const myheros = [ "shaktiman","Naagraj"]
const myArr2 = new Array(1,2,4)
//  access array elements 
// console.log(myArray[0])


// Array Methods 

// myArray.push(6,7,8,9,10,11,12,16)   // add elemnts in array using push elements 
// myArray.pop()           // remove last value of array using pop 
// myArray.unshift(9)        // add elemnts in starting of array or we can say at the 0 index
// myArray.shift()    // remove element from starting of array 

// console.log(myArray.includes(9))   // we can ask array that this value includes in it 
// console.log(myArray)
// console.log(myArray.indexOf(9))



// const newArray = myArray.join(" ")
// console.log(myArray)
// console.log( typeof newArray)


// slice and splice 

console.log("A", myArray)

const new1 = myArray.slice(1,3)
console.log(new1)

console.log("B", myArray)
console.log(new1)


const new2 = myArray.splice(1,3)
console.log(myArray)
console.log(new2)