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
