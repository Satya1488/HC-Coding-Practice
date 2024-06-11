let arr = [2, 3, 6, 7];
let target = 7;
let matrix = [];

for (let i = 0; i < arr.length; i++ ){

    for (let j = i+1; j < arr.length+1; j++){
        matrix.push(arr.slice(i,j));
    }
}

console.log(matrix);

let resultMatrix = [];

for (let i = 1; i < arr.length; i++){

    for (let item of matrix){
        if (i === item.length){

            let sum = 0;
            for (let item1 of item){
                sum += item1;
            }

            if (sum === target){
                resultMatrix.push(item);
            }
        }
    }
}

console.log(resultMatrix);

