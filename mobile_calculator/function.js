const button = document.querySelector("button");

button.addEventListener("click", function () {

    let num1 = document.getElementsByClassName("number1")[0].value;
    let num2 = document.getElementsByClassName("number2")[0].value;
    let op   = document.getElementsByClassName("operator")[0].value;

    num1 = Number(num1);
    num2 = Number(num2);

    let result;

    if (op === "+") {
        result = num1 + num2;
    }
    else if (op === "-") {
        result = num1 - num2;
    }
    else if (op === "*") {
        result = num1 * num2;
    }
    else if (op === "/") {
        result = num1 / num2;
    }
    else {
        result = "Invalid Operator";
    }

    document.querySelector("h2").innerHTML = "Result: " + result;
});