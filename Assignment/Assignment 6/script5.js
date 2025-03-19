function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10; 
    number = Math.floor(number / 10); 
  }
  return sum;
}

let number = 12345; 
let result = sumOfDigits(number);

console.log("Sum of digits is:", result);