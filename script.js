function checkValue(value) {
    if (value < 0) {
        return 0;
    } else if (value < 500) {
        return 1;
    } else if (value <= 5000) {
        return 2;
    }
}


let value = prompt("Enter a value:");
value = Number(value);
let result = checkValue(value);
console.log("The result is: " + result);
