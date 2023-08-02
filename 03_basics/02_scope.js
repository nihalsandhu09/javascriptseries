//  lets understand scope 
// global scope and local scope

 

// global scope 

{
    // scope block scope 
    let a = 10
const b = 20
var c = 30
}

// console.log(a)       // a is not de3fined 
// console.log(b)          // b is not defined
// console.log(c)        //  print 30 


  
//  nested scope kese kaam krta hai 

function one(){
    const  username = " Nihal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)    // throw error  website is not define 
}

// console.log(username)     // throw error username is not define scope issue


// ++++++++++++++++++++++++++++ interesting +++++++++++++++++
console.log(addone(5))
 function addone(num){
return num + 1
 }


 addTwo(5)
const addTwo = function(num){
    return num + 2
}
