// now i linked this file to html file and using DOM properties i can access its elements 
// now  i learn accessing elements through css 
// in javascript if there are multiple elements having sa,e class and 
// i use query selector then it works on only element who is first 
// to slect all elements containing same class name then we use "queryselectorAll" and it gives node list as an output

// const head1 = document.querySelector('#first_head');
// head1.innerHTML =  "Thoo Kaise Hai Aap loggg...";

// let head2 = document.querySelector('#second_head')
// head2.innerHTML ="Aap Padh Chuke Ho..."

// head2.style.backgroundColor = "pink"

// // to iterate on node list then we can use for loop, forEach loop, for of loop 
// const node_list = document.querySelectorAll('.header_1');

//  for(let i of node_list)
//  {
//     console.log(i);
//  }


// //  forEach loop
// node_list.forEach((val)=>{
//     console.log(val);
// }

// )



// // accessing element by tag  name 
// const value = document.getElementsByTagName('h1');
// // suppos ein my html multiple elements are having same tag name so it will returns all values in form of htmlcollection 
// // i can iterate on HTMLlist

// const list = document.getElementsByTagName('li');
// // in out html code there are 4 <li> tags and i can iterate on it using for loop , forEach loop 


// for(let i = 0; i < list.length; i++)
// {
//     console.log(list[i]);  // this is normal for loop 
// }

// // forEach loop 
// team.forEach((val)=>{
//     console.log(val);
// })

// // forof loop
// for(val of team){
//     console.log(val);
// }


// creating element using java-script 
const element = document.createElement('li');
element.innerHTML = "typescript";

// to add this element we need to get access of its parent using id or class
const parent = document.getElementById('list1');

parent.appendChild(element);

// creating function yo add element in html 
function addElement(element_type,id, content)
{
    const element = document.createElement(element_type);
    element.innerHTML = content ; 

    const parent = document.getElementById(id);
    parent.appendChild(element);
}

addElement('li', 'list1', "github" );
addElement('li', 'list1', "React");


// by using append insted of appendChild we can add multiple elements 
const element2 = document.createElement('li');
element2.innerHTML = "blockchain";

const element3 = document.createElement('li');
element3.innerHTML = "LLD";

const element4 = document.createElement('li');
element4.innerHTML = "HLD";

const parent1 = document.getElementById('list1');
parent1.append(element2, element3, element4);


