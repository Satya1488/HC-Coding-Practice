const arr = [1, 2, 3, 4, 5];
const target = 3;

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let midVal = Math.floor ( (left+right) / 2);

        if (arr[midVal] === target) {
            return midVal;
        }

        if (arr[midVal] < target) {
            left = midVal + 1;
        }
        else {
            right = midVal - 1;
        }
    }

}


let r = binarySearch(arr, target);
console.log(r);