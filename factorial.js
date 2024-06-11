const num = 5; 
let fact = 1; 

for (let i=1; i<=num; i++) {
    fact *= i 
}

console.log(fact);

// Another Approach

function factorialOfNum(n) {

    if (n <=1 ) {
        return 1
    };

    return n * factorialOfNum(n-1);

}

let result = factorialOfNum(5);
console.log(result);