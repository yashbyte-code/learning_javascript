// in java script destruction means accesing element in part  as below

const obj = {
    name : "Yash",
    Age : 19,
    Address : "Pune",
    College : "JSPM BSIOTR",
}

// for destruction syntax is like const {value1, value2, ...} = object_name
const {name, Age} = obj;
console.log(name, Age);

// nested object 
// nested object is an object in object 

const obj1 = {
    name : "Yash",
    Age : 19,
    Address : {
        pincode : 413203,
        tal : "Karmala",
        dist : "Solapur",
    },
    College : "JSPM BSIOTR",

}

console.log(obj1.Address.dist);

// destruction on nested object

const {Address:{pincode:city_code}} = obj1; //here i use : after pincode because store its value in city_code variable
console.log(city_code);