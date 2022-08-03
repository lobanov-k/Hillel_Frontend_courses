const num = prompt("Enter your five-digit number:");
if(num.length === 5 && !isNaN(num)) {
    const res = alert(num.split("").join(" "))
} else {
    alert('Not a five-digit number')
}


