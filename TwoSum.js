const arr = [2, 7, 11, 15 ];
const target = 9;

function result(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                console.log(i, j);
            }
        }
    }

}

result(arr, target);