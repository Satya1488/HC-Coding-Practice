const arr = [1, 1, 1, 2, 1, 1, 1, 1];

let count = 0;

for (let i=0; i < arr.length; i++) {

    if (arr[i] === arr[i+1]) {
        count += 1;
    }
    else {
        break;
    }

}

console.log(count);