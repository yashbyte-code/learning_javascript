const button = document.querySelector("button");

button.addEventListener("click", () => {
    const num1 = Number(document.querySelector(".number1").value);
    const num2 = Number(document.querySelector(".number2").value);

    document.querySelector("h2").innerText = "Result: " + (num1 + num2);
});

const colors = [
  "aliceblue",
  "antiquewhite",
  "lightcoral",
  "lightblue",
  "lightgreen",
  "lavender",
  "beige",
  "mistyrose",
  "honeydew",
  "peachpuff",
  "thistle",
  "powderblue",
  "wheat",
  "lightyellow",
  "plum",
  "#f0f8ff",
  "#faebd7",
  "#e6e6fa",
  "#ffe4e1",
  "#f5f5dc",
  "pink"
];

button.addEventListener('mouseover', ()=>{
    const index1 = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index1];
   
})

setInterval(changing_bg, 2000);

