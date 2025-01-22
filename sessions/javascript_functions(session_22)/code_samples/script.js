// factorial of number 5:
function factorial(num = 1) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}
const number = 6;

const factorialResult = factorial(number);

// console.log(`factorial of ${number}`, factorialResult);



// Functions:
// syntax of a function
function functionName(parameters) {
    // Function body
    // Perform operations
    return value;    // optional
}

// function for addition:
function sumOf2Numbers(num1 = 0, num2 = 0) {  // parameters    // default parameters
    let sum = 0;

    sum = num1 + num2;

    return sum;
}
// const returnedSum = sumOf2Numbers(3, 6);    // arguments

// console.log("returnedSum: ", returnedSum);


// TYPES OF FUNCTIONS:
/*
    1. Function Declaration: These are functions defined using the function keyword. (explained in top)
    2. Function Expression
    3. Arrow Functions
    4. Anonymous Function
    5. Immediately Invoked Function Expression (IIFE):
*/

// Function Expression:
const greet = function (name) {     // anonymous function
    console.log("Hello, ", name);
};
// greet("John");


// Arrow Function:
const additionFn = (a = 0, b = 0) => a + b; // will return sum of a+b;

const additionFn1 = (a, b) => {
    if (a > 2 && b > 2) {
        return a + b;   // will return sum of a+b;
    } else {
        return "Invalid inputs";
    }
}

console.log("arrow fn: ", additionFn(3, 7));

console.log("arrow fn1: ", additionFn1(5, 3));