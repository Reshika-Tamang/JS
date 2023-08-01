const num = 50
console.log(num)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))//to fixed means precision 

const othernum = 11123.8961
console.log(othernum.toPrecision(4))

//***************************** MATH *****************************\

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.max(7,28,4,1))
console.log(Math.min(7,28,4,1))


console.log(Math.random())// Math.random gives number between 0 and 1
console.log(Math.floor(Math.random()*10 + 1)) // * 10 shifts the number and +1 gives the num if by chance the number has 0.1 values
//gives the number between 0 and 1  +1 avoids 0 case if any 
const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min +1 ) + min))