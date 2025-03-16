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
const sli=array.splice(2,4);

console.log(sli);
console.log(array);