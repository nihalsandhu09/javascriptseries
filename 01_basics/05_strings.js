const name = "Nihal"
const repocount = 50
// console.log(name +repocount+"Value");  

console.log(`hello my NAme is ${name} and my repo count is ${repocount}`)

const gameName  = new String('Nihal_hc')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const NewString = gameName.substring(0,4) 
console.log(NewString)

const anotherstring = gameName.slice(-7,4)
console.log(anotherstring)

const newstringOne =  '     hitesh    '
console.log(newstringOne);
console.log(newstringOne.trim());

const url = " https:/Nihal.com/%20Sandhu"
console.log(url.replace('%20',"_"))
console.log(url.includes('sundar'))

console.log(gameName.split('_'));

