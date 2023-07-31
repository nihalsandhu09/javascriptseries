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