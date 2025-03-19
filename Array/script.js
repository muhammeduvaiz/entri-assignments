const array = ['a', 'b', 'c', 'd', 'e'];
console.log(array);
// What will be the output of the above code?

// array metods and function

// 1.modifying array
// push() - adds an element to the end of an array
array.push('f');
console.log(array);
array[3]='a';
console.log(array);

// pop() - removes the last element from an array
array.pop();
console.log(array);

// unshift() - adds an element to the beginning of an array
array.unshift('z');
console.log(array);

// shift() - removes the first element from an array

array.shift();
console.log(array);

// Extracting and removing Elements from an Array

// splice() - removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// const sli=array.splice(2,4);

// console.log(sli);
// console.log(array);

//splice() - removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const splic=array.splice(2,4,'1','2','3');
console.log(splic);
console.log(array);


console.log("join")
// string method in array
// join() - joins all elements of an array into a string

const arrjoint = array.join('-');
console.log(arrjoint);
//split - joins all elements of an array into a string 

console.log("split");
const arrsplit = arrjoint.split('-');
console.log(arrsplit);

// slice() - extracts a section of an array and returns a new array
console.log("slice");
const arrslice = array.slice(2,4);
console.log(arrslice);
/* Array Iteration Methods */
// Map
// map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("map");
 const no=[1,2,3,4,5];
 const sq=no.map((num)=>num*2);
 console.log(sq);

 console.log("Example 2");
 const prod=[
    {brand:"Apple",
        price:100,
        quantity:10
    },
    {brand:"Samsung",
        price:200,
        quantity:5
    }, 
    {brand:"Google",
        price:300,
        quantity:3
    }
 ]
const total = prod.map((product) => product.price * product.quantity);
console.log(total);
const brandName=prod.map((product)=>product?.brand);
console.log(brandName);

 // filter() - extracts elements from an array that satisfy a condition
 console.log("filter");
    const fil=no.filter((num)=>{
        return num>=3});
    console.log(fil);
    console.log("Example 2");
    const prodq=prod.filter((product)=>product.quantity>=5);
    console.log(prodq);

// reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
console.log("reduce");
    const redu=no.reduce((acc,curr)=>acc+curr,5);
    console.log(no);
    console.log(redu);

// forEach() - executes a provided function once for each array element
console.log("forEach");
    no.forEach((num)=>
        {console.log(num)});
    array.forEach((alpha)=>{
        console.log(alpha);
    })
    const multi = [];
    no.forEach((num)=>{
        const mult = num *5;
        multi.push(mult);
        });
        console.log(multi);

// Rest and spread operator
// spread() - The spread operator expands elements of an array or object
console.log("spread");
const n1=[1,2,3,4,5];
const n2=[...n1,6,7,8,9,...n1];
console.log(n2);

console.log("Example 2");
const person={
    name:"John",
    age:25,
    city:"New York"
}
const employee={
    ...person,
    salary:50000,
    position:"Software Developer"
}
console.log(employee);
// rest() - The rest operator collects all the remaining elements into an array
console.log("rest");
function multip(multiplier,...numbers){
    return numbers.map((num)=>num*multiplier);
}
const result = multip(2,1,2,3,4,5);
console.log(result);