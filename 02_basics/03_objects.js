// singleton jab koi b objects hum object constructor ka use kr ke bnate hai toh ye bnta hai mtlb apni tarah ka ek hi object hota hai 
// jab hum literals ki tarah object kon declare krte hai to  singleton nhi bnta 
let names  = new Object() // constructor method
let obj = {  // this is object literals 
    // we can store here values in key : valeu pair 
}
// Object.create  constructor method

const mySym = Symbol("Key1")
const JsUSer = {
name:"hitesh",
"full name":"hitesh choudhary",
[mySym]:"myKey1",
age:18,
location:"Jaipur",
email:"hitesh@google.com",
isLoggedIN: false,
lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUSer.email)
// console.log(JsUSer["email"])
// console.log(JsUSer["full name"])
// console.log( typeof JsUSer[mySym])


// change values  
JsUSer.email ="NihalSandhu"
// Object.freeze(JsUSer)
JsUSer.email= "SandhuNihal"
console.log(JsUSer)



JsUSer.greeting = function(){
    console.log("Hello Js User")
}
JsUSer.greetingTwo = function(){
     console.log(`Hello Js User , ${this.name}`) //  if i want to target same or refre i will use this 
}
console.log(JsUSer.greeting)  //  we will get refrence of function 
console.log(JsUSer.greeting())  //  here we will get output of function we invoke functions using paranthesis

console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());