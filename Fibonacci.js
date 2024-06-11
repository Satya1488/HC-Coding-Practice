// let number = 5;

// let num1 = 0;
// let num2 = 1;
// let nextNum;
// let arr = [];

// for (let i=0; i < number; i++) {
    
//     arr.push(num1);

//     nextNum = num1+num2;
    
//     num1 = num2;

//     num2 = nextNum;

// }

// console.log(arr);

function fibonacci(n) {
    if (n <= 1) {
        return n
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

let arr = [];

function getFibonacciSeries(n) {

    for (let i=0; i<n; i++) {
        let term = fibonacci(i);
        arr.push(term);
    }
    return arr;
}


let n = 5;
let result = getFibonacciSeries(n);
console.log(result)
