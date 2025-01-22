const calcSpan = document.getElementById("calcSpan");

let a = 10;
let b = 25;

// Arithmetic Operators:
const sum = a + b;
console.log("sum is: ", sum);

// assigning value to the calcSpan element
calcSpan.innerText = sum;

const substraction = a - b;
console.log("substraction is: ", substraction);

const multiplication = a * b;
console.log("multiplication is: ", multiplication);


// Datatypes:
/*
    1. primtive
        1. String: Represents textual data. eg: "javascript"
        2. Number: Represents numeric values (both integers and floating-point numbers).
        3. BigInt: Represents integers with arbitrary precision.
        4. Boolean: Represents a logical entity, true or false.
        5. Undefined: Represents a variable that has been declared but has not been assigned a value.
        6. Null: Represents the intentional absence of a value.

    2. non-primitive (reference)
        1. object
        2. array	-> at the end array is also an object
*/

// example for primitive Datatype:
let c = 10;
let d = c;

d = 20;

console.log("c: ", c);
console.log("d: ", d);

// examples of each datatype:
console.log("check Databtype String: ", typeof "Nijas Khan");

console.log("check Databtype Number: ", typeof 42);

console.log("check Databtype Boolean: ", typeof false);

let z;
console.log("check Databtype Undefined: ", typeof z);

console.log("check Databtype Null: ", typeof null);


// example for non-primitive Datatype:
const array = [1, 2, 3, 6, 8]; //ordered array // at last array is also an object;
// array.push(7);
// array.sort()
// console.log("array values: ", array);

// object is a key: value pair
const object = {
    name: "Nijas",
    age: 25,
    hobbies: ["reading", "coding"]
}

console.log("check Datatype non-primtive: ", typeof object);
console.log("check Datatype non-primtive array: ", typeof array);

// example for non-primitive datatype:
let obj1 = {
    name: "spiderman",
    age: 20,
    hobbies: ["web-dev", "fighting"]
}
// console.log("obj1 hobbies: ", obj1.hobbies);

let obj2 = obj1; // obj1 is assigning the pointer reference to obj2

obj2.name = "batman";
obj2.hobbies.push("killing"); // we are using the push method of array

console.log("obj1: ", obj1);

const array2 = [1, 2, "nijas", 6, "spiderman"];
console.log("array 3rd position value: ", array2[2]);

array2[3] = "batman";
console.log('array2 :', array2);