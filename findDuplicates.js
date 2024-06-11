const arr = [4, 3, 2, 7, 8, 2, 3, 1];

let dup = [];
let unique = [];

for (let i of arr) {
    if (unique.includes(i) === false) {
        unique.push(i);
    }
    else {
        dup.push(i);
    }
}

console.log(dup);