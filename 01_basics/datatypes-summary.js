// primitive 

// 7 types : String , Number , Boolean , null ,undefined , Symbol,bigInt

 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null ;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bignumebr = 8582825585858555564556n
// Reference type (Non peimitive )

//  Array , Objects ,functions 

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"hitesh",
    age:22,
}

let myfuncion  = function(){
 console.log("Hello world ")

}

console.log(typeof bignumebr);
console.log(typeof anotherId);
console.log(typeof outsideTemp);
console.log(typeof myfuncion);
console.log(typeof heros);



// ******************

//stack(primitive stack memory used in primitive data types ) ,heap(nono primitivfe ) 
let myyoutubename = 'Nihalsandhu.com'
let anothername = myyoutubename
anothername = "Sandhu"

console.log(myyoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let usertwo = userOne
usertwo.email = "goole.com"

console.log(userOne.email)
console.log(usertwo.email)