//Primitive Datatype(refer the notes)
const id = Symbol("123")
const another_id = Symbol("123")
console.log(id === another_id)

//Non Primitive(Reference dataype)
//Array,objects,functions

const Sub =["Math","Science","English","Nepali"]
console.log(Sub)
//Just showing how to declare objects and functions
//Objects are basically inside the curly braces
{
    name: "Reshika";
    age: 24;

}
//or else can also be stored inside a variable
let myObj = {
   name: "Reshika",
   age: 24,
}
const my_func = function(){
   console.log("Hello World");
}



//*********************************************************************** *//
//Memory : Stack (primitive),Heap(Non Primitive)

let name = "Reshika"
let name2 = name
name2 = "Tamang"

//since this is primitive  datatype thats why its using stack as memory and it only gives call by value
console.log(name2)

let my_info ={
   name: "Reshika Tamang",
   Age: 24,
}

let myinfo2 = my_info
myinfo2.name = "Abcde"
console.log(myinfo2.name)

//Since this is non primitive datatype and since non primitive datatype uses heap and gives references rather than value thats y its changing myinfo too
console.log(my_info.name)

