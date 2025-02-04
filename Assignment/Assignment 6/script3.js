function checkPrimeOrComposite(number) {
    if (number <= 1) {
        return `${number} is neither prime nor composite.`;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return `${number} is a composite number.`;
        }
    }

    return `${number} is a prime number.`;
}


const inputNumber = 29;
console.log(checkPrimeOrComposite(inputNumber));
