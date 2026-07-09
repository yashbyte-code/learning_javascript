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