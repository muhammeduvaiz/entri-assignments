function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
        
    }
    console.log("Factorial of",n,"is :", result);
    
}

factorial(5);

