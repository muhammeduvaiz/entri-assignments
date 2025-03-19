function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function isStrongNumber(number) {
    let sum = 0;
    let temp = number;

    while (temp > 0) {
        let digit = temp % 10; 
        sum += factorial(digit); 
        temp = Math.floor(temp / 10); 
    }

    return sum === number; 
}

let number = 145;
if (isStrongNumber(number)) {
    console.log(`${number} is a Strong Number.`);
} else {
    console.log(`${number} is not a Strong Number.`);
}