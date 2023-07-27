const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Una"

// accountId = 2          // not allowed 

accountEmail = 'hc@gmail.com'
accountPassword = "212121212121"
accountCity = "Bengaluru"
let accountstate ; 
/*
 prefer not to use var 
 because of issue in block scope and functional scope
 
*/
console.table([accountId,accountEmail,accountPassword,accountCity ,accountstate])
console.log(accountId);
