function overLapping(intervals) {

    let arr = []

    for (let i of intervals) {
        let sorted = i.sort();
        arr.push(sorted)
    }

    //console.log(arr)

    const previous = [arr[0]];

    for (let i = 1; i < arr.length; i++) {

        const currentVal = arr[i];
        //console.log(currentVal)
        //console.log(previous[previous.length - 1])
        const lastVal = previous[previous.length - 1];
        //console.log(lastVal)

        if (currentVal[0] <= lastVal[1]) {
            lastVal[1] = Math.max(lastVal[1], currentVal[1]);
        } else {
            
            previous.push(currentVal);
        }
    }

    return previous;
}


const inputs = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = overLapping(inputs);
//console.log(result);
