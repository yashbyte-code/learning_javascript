const form = document.querySelector('form');


 // it prints value on console as we enter in form 
// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// it prints what value we insert after moving on next section 
// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// });

// it is used when we not want bubbling and very rarely we use it 
form.addEventListener('focus', (event)=>{
    console.log(event.target.value);
})





