
const name = "Reshika"
const repo_count = 40

console.log(name + repo_count) // Dont use this to concat
//instead use back ticks because it gives the advantage of string interpolation

console.log(`hello my name is ${name} and my repocount is ${repo_count}`)// creates a placeholder and its new type of writing


const fname =  new String("reshika_tamang")
console.log(fname[0])
console.log(fname.__proto__)
console.log(fname.toUpperCase())// the content only changed its case but not the entire content because since string is stored in stack it will be stored in stack and not heap 
console.log(fname.charAt('2'))

const new_string = fname.substring(0,4)// THis cannot be negative . This doesnt give any error but wont follow the -ve range given .
console.log(new_string)

const another_name = fname.slice(-12,-4)//slice(startindex,endindex)
console.log(another_name);

string_2 = "     sangdolma     "
console.log(string_2.trim())
string_3 = "hitesh@1999"
console.log(string_3.slice(-5,-2))
string_4 = string_3.replace('@','-')
console.log(string_4)
console.log(string_4.includes("hitesh"))
console.log(string_4.split('-'))

