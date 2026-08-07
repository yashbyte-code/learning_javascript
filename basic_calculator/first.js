const button = document.querySelector("button");

button.addEventListener("click", () => {
    const num1 = Number(document.querySelector(".number1").value);
    const num2 = Number(document.querySelector(".number2").value);

    document.querySelector("h2").innerText = "Result: " + (num1 + num2);
});