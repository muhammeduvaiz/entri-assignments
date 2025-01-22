/*
Control statements are used to dictate the flow of execution in a JavaScript program. These are broadly categorized into:
    1. Conditional Statements
    2. Looping Statements
*/

// Conditional Statements:

// if statement
let x = 3;

if (x < 5) {
    console.log("x is less than 5");
}

// if-else statement
let y = 25;

if (y < 20) {
    console.log("y is less than 20");
} else {
    console.log("y is greater than 20");
}

// else-if statement
let mark = 60;

if (mark <= 100 && mark >= 60) {
    console.log("grade: A");
} else if (mark <= 60 && mark >= 40) {
    console.log("grade: B");
} else if (mark <= 40 && mark >= 20) {
    console.log("grade: C");
} else {
    console.log("Failed!!!");
}

// switch statement
let day = 10;

switch (day) {
    case "Monday":
        console.log("seleced day is Monday");
        break;
    case "Tuesday":
        console.log("selected day is Tuesday");
        break;
    case "Wednesday":
        console.log("selected day is Wednesday");
        break;
    case "Thursday":
        console.log("selected day is Thursday");
        break;
    case 10:
        console.log("selected an integer Number!!");
        break;
    case "Saturday":
        console.log("selected day is Saturday");
        break;
    case "Sunday":
        console.log("selected day is Sunday");
        break;
    default:
        console.log("Invalid day");
}

/* COMMON IDEA */
// array of single values
const array = ["sunday", "monday", "Tuesday", "Wednesday"];

// console.log("first element from the array: ", array[0]);
// console.log("array length: ", array.length);

// array of objects
const objArray = [
    { day: 1, value: "sunday" },
    { day: 2, value: "monday" },
    { day: 3, value: "tuesday" },
]


/* 
Looping Statements:
    1. for Loop:  !!important
        - A loop that runs for a specified number of iterations.
    2. while Loop:  !!important
        - Executes as long as the condition is true.
    3. do...while Loop:
        - Similar to while, but ensures the loop runs at least once, regardless of the condition.
    4. for...of Loop (ES6+):    !!important
        - Iterates over iterable objects like arrays or strings.
    5. for...in Loop: 
        - Iterates over the enumerable properties of an object.
*/

// for-loop:

// const array = ["sunday", "monday", "Tuesday", "Wednesday"];
// i = 0;
// array.length = 4;
// 0 < 4
// i++ = i=i+1;

// 4 < 4  =  false;
for (let i = 0; i < array.length; i++) {
    console.log("array values: ", array[i]);
}

// while-loop:
let j = 0;

while (j < 10) {
    console.log("value of j: ", j);
    j++;
}

// do...while-loop:
let k = 10;

do {
    console.log("value of k: ", k);
    k++;
} while (k < 10);  // 10 < 10  =  false;

// for...of loop:

// const array = ["sunday", "monday", "Tuesday", "Wednesday"];
for (const value of array) {
    // console.log("array values from for-of loop: ", value);
    if (value == "sunday") {
        console.log("wow, its sunday!!!");
        break;  // break out of loop
    } else if (value == "monday") {
        console.log("oh man!, its monday!!!");
        break;
    }
}

// continue
// i=0;
// 0 < 10 = true;

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;   // skip
    }
    console.log("value of i: ", i);
}