
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let r = arr1.concat(arr2);

function bubbleSort(r) {

    for (let i=0; i<r.length; i++) {
        //console.log(r[i])
        for (let j=0; j<r.length; j++) {
            if (r[j] > r[j+1]) {

                let temp = r[j];
                r[j] = r[j+1];
                r[j+1] = temp;
            }
        }
    }
    console.log(r)

}

bubbleSort(r);