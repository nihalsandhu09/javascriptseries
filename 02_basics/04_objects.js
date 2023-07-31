//  here will se how can we crete object with constructor 

// const tinderUser = new Object()
 const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name= "Sam"
 tinderUser.isLoggedIn =false
// console.log(tinderUser)


const regularUser = {
email : "Sum@gmail.com",
fullname:{
userfullname:{
    firstname:"hitesh",
    lastname:"choudhary"
}
}
}

// console.log(regularUser.fullname?.userfullname.firstname) 
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}
const obj3 = Object.assign(obj1, obj2)  //  assign method 
// const newObj = {...obj1,...obj2}  using spread operator 
// console.log(obj3)
// console.log(newObj)

const users = [
    {
        id:12,

    },
    {
        id:13
    }
]

users[1].id = 14;    // this is how you can access array of objects properties  
// console.log(users)

// console.log(tinderUser);

let lops = Object.keys(tinderUser).map((e)=>{
    return e 
})
let lops1 = Object.values(tinderUser).map((e)=>{
    return e 
})
// console.log(lops)
// console.log(lops1)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructuring in objects  
const course = { 
coursename:"js in hindi ",
price:"999",
courseInstructor:"hitesh"}

// course.courseInstructor 

const{courseInstructor : instructor} = course    // this is destructuring in javascript
// console.log(courseInstructor)
console.log(instructor)


// api json  simply javascript notation hai 
// {
//  name: " hitesh",
//  coursename : "js  in hindi ",
//  price: "free"
// }



// [
//     {},
//     {},
// ]