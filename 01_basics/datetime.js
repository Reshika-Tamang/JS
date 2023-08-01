let myDate = new Date()
console.log(myDate.toString())
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//creating specific date 

let myCreateDate = new Date(2023, 0,12)
console.log(myCreateDate.toDateString())
let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myCreateDate.getTime())
//to get the time in seconds divide it by 1000
 let newDate = new Date()
 newDate.toLocaleString('default',{
    weekday : "long",
 })