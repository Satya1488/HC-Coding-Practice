const arr = [5, 4, 3, 2, 1, 9];
// const n = arr.length;

// for (let i=0; i<n; i++) {
    
//     for (let j=0; j < n-i-1; j++) {
        
//         if (arr[j] > arr[j+1]) {
            
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
//     //console.log(arr)
// }

// let sum = arr[n-1] + arr[n-2] + arr[n-3];

// console.log(sum);

function bubbleSort(arr) {
    let n = arr.length;

    for (let i=0; i<n; i++) {

        for (let j=0; j<n; j++) {

            if (arr[j] > arr[j+1]) {

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;

}

let sortedArr = bubbleSort(arr)

let sum = 0;
let count = 0;
for (let i=0; i<sortedArr.length; i++) {

    if (count === 3) {   
        break;
    }
    else {
        let num = sortedArr[sortedArr.length-i-1];
        count += 1;
    
        sum += num;
    }

}
console.log(sum)