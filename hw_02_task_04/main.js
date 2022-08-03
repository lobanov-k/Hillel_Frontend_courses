const login = "admin";
const password = "mySuperPassword";
const firstInput = prompt("Enter your login:");

console.log(firstInput);

if(firstInput === login){
    const secondInput = prompt("Enter your password:");

    if(secondInput === password){
        alert("You are in!");
    } else {
        alert("Wrong password!")
};
    console.log(secondInput);

} else {
    alert("Wrong login");
};

