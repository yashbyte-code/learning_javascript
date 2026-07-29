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


// if i want to add only text mode then there is different method because it not contain any tag
const text = document.createTextNode("hello Everyon, Yash is Here...");
const parent5 = document.getElementById('container');
parent5.append(text);


// adding attribute node 
const attribute = document.createAttribute('class');
// inserting value of id by using .value function 
attribute.value = "unordered_list";

// now we need access of an element to add attribute for that we use query selector function
const curr_attribute = document.querySelector('ul');

// now we give access , its time to insert vallue in it 
curr_attribute.setAttributeNode(attribute);


// now similarly giving attribute to first element to unordered list 
const attribute1 = document.createAttribute('id');
attribute1.value = "first_list";

const curr_attri = document.querySelector('li');
curr_attri.setAttributeNode(attribute1);


// suppose i have list like 
//  <ul id="list1">
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>Networking</li>
//             <li>Javascript</li>
//   </ul>

// and i want to access 2nd "li" from "ul list "
// then i firstly access its parent element then it gives html collection
// and then we can access it same as accessing element from array 

const attribute2 = document.createAttribute('id');
attribute2.value = "li_2";

const parent_list = document.getElementById('list1');

// ❌ parent_list[1] was wrong → because parent_list is single element
// ✅ we use children to get HTMLCollection
parent_list.children[1].setAttributeNode(attribute2);


// supppose i want to get attribute of any element then 
// first i access the element by its existing any one attribute like class name or id name

const get_element = document.getElementById("list1");

// here i give two values it creates custom named attribute and its value is list_of_topic
get_element.setAttribute("custom", "list_of_topic");