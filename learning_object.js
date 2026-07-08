// creating object in javascript 
// there are 3 methods to create object 
// method : 1

const obj = {
    name : "Yash",
    Age : 20,
    Branch :  "IT"
}

console.log(obj);

// we can retrive data from object using key name 
console.log(obj.name);
console.log(obj.Age);

// similarly we can use [] to retrive data from object 
console.log(obj["name"]);
console.log(obj["Age"]);


// in object we can give number as a key name as below 
const obj1 = {
    0 : "Yash",
    1 : "Sabale",
    3 : 20
}

// to retrive data from this type of object we use [] not . and there is no need to write number in " " simply write in []
console.log(obj1[0]);
console.log(obj1[1]);


// now we are moving towards second method to create object 
const obj2 = new Object()

// inserting values in it 
obj2.name = "Yash Don";
obj2.age = 19;
obj2.college = "JSPM BSIOTR ";

console.log(obj2);


// method - 3 of creating object is based on class (object oriented programming )
class people{
    constructor(name,age, college){
        this.name = name;
        this.age = age;
        this.college = college;
    }
}

let student1 = new people("Yash", 19, "Information Technology");
console.log(student1);