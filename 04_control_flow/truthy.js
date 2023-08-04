const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values 

// false ,0 , -0,BigInt 0n,"",null,undefined,NaN 

// truthy values 

// "0" , 'false'," ",[],{},function(){}

// if(userEmail.length === 0){
// console.log("Array is empty");
// }

const emptyobj = {}
if(Object.keys(emptyobj).length===0){
console.log("object is empty ")
}



// nulliish coalescing Operator (??): null undefined
// ye operator sirf null or undefined ke liye na hai 
let val1;
// val1 = 5??10
// val1 =null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? null
val1 = null ?? 10 ?? 20

console.log(val1)

//  Terniary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice < nullish operator ternory = 80 ? console.log("less than 80"): console.log("more than 80")