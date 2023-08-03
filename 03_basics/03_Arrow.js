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


const addTwo = (num1,num2)=> (  {
    username: "hitesh"
})

console.log(addTwo(4,4))