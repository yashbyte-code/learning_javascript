// in javascript reduce is a reduce() is an array method that 
// takes all the elements of an array and "reduces" them down to a single value — 
// could be a number, string, object, or even another array. It's one of the most powerful (and initially confusing) array methods.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);


// it takes call back function and then initializer in it we can give any thing like object, array, etc.
const number1 = [10, 20, 30, 40, 50]

const obj1 = number1.reduce((acc, value, index)=>{
    acc[index] = value
    return acc;
}, {});

console.log(obj1);

// in reduce it's call back function takes three values first is accumulater , second is value and last is index 

const obj2 = {
    name: "Yash",
    Age: 19,
    address: "Karmala"
};

const obj_val = Object.entries(obj2).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(obj_val);
// { name: 'Yash', Age: 19, address: 'Karmala' }