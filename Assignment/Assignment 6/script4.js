function displayFibonacciSeries(n) {

    let a = 0, b = 1;

    if (n >= 1) {
        console.log(a);
    }


    if (n >= 2) {
        console.log(b);
    }


    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);


        a = b;
        b = c;
    }
}


let n = 10;
displayFibonacciSeries(n);