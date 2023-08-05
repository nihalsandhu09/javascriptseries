//  for of 

["","",""]
[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {// here object ka mtlb kis cheez pe loop lgana chahhte ho arr/obj 
    // console.log(num)
}

const greetings  = "Hello world"
for (const greet of greetings) {
    if(greet === " "){
        continue;
    }
    console.log(`Each char is ${greet}`)
}


// Maps 
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"united Stataes of America")
map.set('fr',"France")
map.set('IN',"INDIA") // this will not neter map because we allready declare this value map only contain unique values
console.log(map)
for (const[key,value] of map) {
    console.log(key, ':-',value)
    
}


const myObject = {
    'game1':"NFs",
    "game2": 'spiderman'
}

// for (const [key,value] of myObject) { // not work 
//     console.log(key,':-',value);
// }