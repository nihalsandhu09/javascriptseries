//  if 
if(true){
console.log("hello")
}

if(2 == "2"){
    console.log("executed")
}

const temprature = 41;

// if(temprature < 51){
//     console.log("Temprature is less than 51")
// }
// else{
//     console.log("Temprature is greater than 50")
// }
// console.log("Execute")

const score = 200;

// if(score > 100){
//     let power = 'fly'
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`)

const balance = 1000
// if(balance > 500) console.log("test"); 

// if(balance < 500){
// console.log("less than")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("LEss than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn =true
const debitCard = true
const loggedInFromGooglr =false
const loggedInFromemail= true;


if(userLoggedIn && debitCard && 2==2){    // &&  check all condition is true if not :error
console.log('Allow to buy course')
}

if(loggedInFromGooglr || loggedInFromemail || true){   //  || if one statemnet is true it prints
    console.log("user logged in");
}