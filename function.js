// Function : function is a block of code executes only when we call it 
// in javascript we can create function with 3 different methods as below

// method 1)
// creating function 
function greet(){
    console.log("kaise ho mere bhai Yash..");
}

// calling function
greet();

// in javascript there is one special function named arrow function 
// its syntax is very easy there is no need to write function keyword only we can write => 

const cube = (number)=>{
    const cube_num = number*number*number;
    return cube_num;
}

console.log(cube(8));

// in cross function if there is only single line code then there is no need of 
// round bracket around argument and no need to write return function 

const cube1 = number => number*number*number;
console.log(cube1(18));

// we can pass object to a function 

function details(objects) {
    console.log("name of student is :" , objects.name);
    console.log("Birthdate of student is :" , objects.DOB);
}

const obj1 = {
    name : "Yash",
    DOB : "10-03-2007",
    age : 19,
    branch : "IT"
}

details(obj1);