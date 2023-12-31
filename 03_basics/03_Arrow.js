const user = {
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)   // this jo hai wo current context bananta hai refer krta hai 
        console.log(this) // current values ko refer krta hai 
    }

}
// user.welcomeMessage()
// user.username= 'sam'
// user.welcomeMessage()

// console.log(this)  // in node environment it will print empty object


// function chai(){
//     let username="hitesh"
//     console.log(this.username);   // can't use this method like this in function 
// }
// chai()
//  function expression 
// const chai = function(){
// let username= " hitesh"
// console.log(this.username) // this will also print undefined  this method works in objects
// } 
// chai()



const chai = () =>{
    let username= " hitesh"
    // console.log(this.username)
    console.log(this)
}
// chai()




// const addTwo = (num1,num2)=>{
//   return num1+num2
// }
// implicit return arrow function 
// const addTwo = (num1,num2)=>  num1+num2

// const addTwo = (num1,num2)=>  (num1+num2) // dont have to use return keyword 


// const addTwo = (num1,num2)=> (  {
//     username: "hitesh"
// })

// console.log(addTwo(4,4))


// context ka mtlb hai simple values 

// console.log(this)  // in node environment this will refer empty object if there was no context availible


 function chai1(){
    let username = 'hitesh'
    console.log(this)
}
const chai2 = function(){
    let username = 'hitesh'
    console.log(this)
}

const chai3 = () => {
    let username = 'hitesh'
    console.log(this)
}
// chai1()
// chai2()
// chai3()


//  using arrow function 

let arrowFunction = (num1,num2 )=> num1 * num2   // in implicit return arrow function return keyword is not used 
let arrowFunctiontwo = (num1,num2 )=> (num1 * num2) // we can wrap this in paranthisis()
console.log(arrowFunction(4,9))
console.log(arrowFunction(10,9))
console.log(arrowFunctiontwo(100,9))



// how to return object in arrow function  
// we have to wrap object in paranthisis  
const funcreturnobj = ()=> ({username:"nihal"})
console.log(funcreturnobj())