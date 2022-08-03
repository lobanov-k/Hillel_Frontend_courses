//Very user friendly:)
const number1 = Number(prompt("You should better go and use calculator instead of JS, but who am I to tell you what to do... Anyways, enter you first number"))
const number2 = Number(prompt("and the second one"))
const action = prompt("Wow you are still here? JS isn't made for this you know? Okay.... what action do you want to take? Example: addition, subtraction, multiplication, division")

//Addition
if (action == "addition") {
    let res = number1 + number2;
    alert(res);
}/*Subtraction*/ else if (action == "subtraction") {
    let res = number1 - number2;
    alert(res);
}/*Multiplication*/ else if (action == "multiplication") {
    let res = number1 * number2;
    alert(res);
}/*Division*/ else if (action == "division") {
    let res = number1 / number2;
    alert(res);
} else {
    alert('Well, I knew that you would do something wrong! Use calculator OMG. Instructions: In first two prompts, you should write only numbers. And in third prompt you should write: addition, subtraction, multiplication,  division')
}

