const marvel_heros = ["thor","Ironman","spiderman"]
const Dc_heros = ["superMan","Flash","batMan"]

// marvel_heros.push(Dc_heros)
// console.log(marvel_heros)
// concat operator 
// let concat =  marvel_heros.concat(Dc_heros)
// console.log(concat)

// spread operator
// const all_new_heros = [...marvel_heros,...Dc_heros]
// console.log(all_new_heros)


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// //  use flast method to make it one array not array in array 
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
let obj = {
a:"hello",
b: true
}

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from(obj))    // interessting 




let score1 = 100;
let score2 = 200;
let score = 300;
console.log(Array(score1,score2,score))
console.log(Array.of(score1,score2,score))