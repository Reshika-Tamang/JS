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


