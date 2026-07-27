// now i linked this file to html file and using DOM properties i can access its elements 
// now  i learn accessing elements through css 
// in javascript if there are multiple elements having sa,e class and 
// i use query selector then it works on only element who is first 
// to slect all elements containing same class name then we use "queryselectorAll" and it gives node list as an output

const head1 = document.querySelector('#first_head');
head1.innerHTML =  "Thoo Kaise Hai Aap loggg...";

let head2 = document.querySelector('#second_head')
head2.innerHTML ="Aap Padh Chuke Ho..."

head2.style.backgroundColor = "pink"

// to iterate on node list then we can use for loop, forEach loop, for of loop 
const node_list = document.querySelectorAll('.header_1');

 for(let i of node_list)
 {
    console.log(i);
 }


//  forEach loop
forEach((val)=>{
    console.log(val);
}

)



// accessing element by tag  name 
const value = document.getElementsByTagName('h1');
// suppos ein my html multiple elements are having same tag name so it will returns all values in form of htmlcollection 