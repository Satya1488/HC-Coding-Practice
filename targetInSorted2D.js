const arr =  [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]];
const target = 8;

function targetInArray(arr, target){
    
    let count = 0;
    for (let i of arr) {

        let isPresent = i.some(num => {
            if (num === target) {
                count += 1;
            }
        })
    }

    if (count > 0) {
        console.log('TRUE')
    }
    else {
        console.log('FALSE')
    }
}

targetInArray(arr, target);
