const firstValue = prompt("Enter your first value");
const secondValue = prompt("Enter your second value");

const res = firstValue == secondValue;
// no need to use ? operator here. (firstValue == secondValue) will return Boolean by itself
// alert converts variables to string. Boolean converts to "true" / "false" string.
alert(res);

