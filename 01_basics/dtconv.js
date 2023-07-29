let score = "33abc"
let valueInNum = Number(score)
console.log(valueInNum)
console.log(typeof score)
console.log(typeof valueInNum)

//"33" => 33
//"33abc " => NAN(not a number) but its type is number

let val = true
let valInNUm = Number(val)
console.log(valInNUm)

//true => 1


let val2 = null
let valInNUm2 = Number(val2)
console.log(valInNUm2)

//null -> 0


let val3 = undefined
let valInNUm3 = Number(val3)
console.log(valInNUm3)

//undefined -> NAN
 

//******************************Operations ***********************************

let value = 3
let negval = -value
console.log(negval)

console.log(2+2)
console.log(2-2)
console.log(2**3)
console.log(3/2)
console.log(3%2)



let str1 ="Hello "
let str2 = "Its reshika"
console.log(str1 + str2)

//The following code should be investigated properly

console.log("1" + 2)
console.log(1 + "2" )
console.log("1" + 2 + 2)//converts into first datatype
console.log(1 + 2 + "2")


