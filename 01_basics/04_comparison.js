// lets learn about comnparison 
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2>==1)
// console.log(2!=1)

console.log("2"> 1);
console.log("02"> 1);

// Avoid These types of Comparison
console.log(null>0)         // sometimes null convert to NAN or sometimes to Zero 
console.log(null == 0)
console.log(null>=0)   // convert null to 0 thats why is shows true in console

console.log(undefined == 0);


// Eauality Check  

// ==  // nono strictyly check this will convert a string into number and print true if the value is same , 
console.log("2" == 2)   // true
// === // strictyly Check
console.log("2" === 2);