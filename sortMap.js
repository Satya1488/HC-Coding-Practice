const obj = {
    "a" : 3,
    "b" : 1,
    "c" : 2
};

let entries = Object.entries(obj);
//console.log(entries);
let values = Object.values(obj).sort();
//console.log(values);

let result = {};

for (let i=0; i<values.length; i++) {

    for (let [key, val] of entries) {
        if (values[i] === val ) {
            result[key] = val;
        }
    }
}

console.log(result);
