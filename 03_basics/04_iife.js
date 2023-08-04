//  immediately invoked Function Expressions (IIFE)


// Global Scope ke pollutins se problem hoti hai keyi baar un global variables ke pollutions ko hatane ke liye hamne iife ka use kiya  
(function chai(){
    //named iife
    console.log('db connected')
})();   // USE SEMICOLOM TO EXIT CONTEXT IF WE DONT USE IT IT WILL THROW ERROR use it when we have to use two iife 

(()=>{
    console.log(`DB CONNECTED TWO`)
})();
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')