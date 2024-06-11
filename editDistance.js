let word1 = "horse";
let word2 = "ros";
let count = 0;

for (let item of word2){

    if (word1.includes(item)===true){
        count+=1
    }
}
// console.log(count)

let longest = 0;

if (word1.length > word2.length){
    longest = word1.length
}
else{
    longest = word2.length
}

console.log(longest-count)