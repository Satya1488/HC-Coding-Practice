const arr = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
const target = "ABCCED";

let a = [];

for (let i=0; i<arr.length; i++) {
    a.push(...arr[i])
    
}

//console.log(a)

let b = []; 

for (let i of target) {
    
    if (a.includes(i) === true) {
        b.push(i)
    }
}

let extractedStr = b.join("")

if (extractedStr === target) {
    console.log('TRUE');
}
else {
    console.log('FALSE')
}
