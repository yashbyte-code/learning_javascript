const quotes = [
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Consistency beats talent.",
  "Hard work pays off.",
  "Stay hungry, stay foolish.",
  "Push yourself, no one else will.",
  "Believe in yourself.",
  "Every moment is a fresh beginning.",
  "Do it with passion or not at all.",
  "Small steps every day.",
  "Your only limit is your mind.",
  "Focus on the process.",
  "Make it happen.",
  "Turn pain into power.",
  "Discipline creates freedom.",
  "Be stronger than your excuses.",
  "Work until you don’t need an introduction.",
  "Great things take time.",
  "Learn from yesterday, live for today.",
  "Stay positive, work hard.",
  "Don’t stop until you’re proud.",
  "Doubt kills more dreams than failure.",
  "Start where you are.",
  "Keep going no matter what.",
  "Success starts with self-belief.",
  "Action is the key to success.",
  "Be fearless in the pursuit of greatness.",
  "Fall seven times, stand up eight.",
  "Hustle in silence, let success speak.",
  "Winners never quit."
];


const parent = document.getElementsByClassName('quote')[0]; //getElementsByClassName give html collection so [0] gives 1st element

function changing()
{
    const index = Math.floor(Math.random() * quotes.length);
    parent.innerHTML = quotes[index]; 
}


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
  "#f5f5dc"
];

function changing_bg()
{
    const index1 = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index1];
}

setInterval(changing, 3000);
setInterval(changing_bg, 3000);
