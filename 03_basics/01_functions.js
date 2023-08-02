//  functions 


function sayMyName(){
    console.log("h")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}
sayMyName  // this is refrence of function 

sayMyName()  //  if wanted to execute the code use parantheses with functions name



// function addTwoNumbers(a,b){
//     console.log(a + b ) 
// }


function addTwoNumbers(a,b){
    // let result = a + b
    // return result ;

    return a + b 
    
}
// console.log(addTwoNumbers(7,8))
const result  = addTwoNumbers(3,5)
// console.log("Result :" , result);



function logginusserMessage(username = " Sam"){
    if(!username){
 console.log("please neter a username")
 return ;
    }
    return  `${username} just logged in`
 }
 
console.log(logginusserMessage("Nihal"))
// console.log(logginusserMessage())

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000))


// functions with objects  
const user = {
    username : "hitesh",
    price:199
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`  )
}
// handleObject(user) 
handleObject({           // we can pass directly objefct in rguments 
    username:"nihal",
    price:399
})



// Arrays with objects 

const myNewArray = [200,400,100,600]
function retturnSecondValue(getArray){
    return getArray[1]
}

// console.log(retturnSecondValue(myNewArray))
console.log(retturnSecondValue([200,400,500,1000]))