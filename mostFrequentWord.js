let str = "the quick brown fox jumps over the lazy dog the quick";
str = str.split(" ");
let dict = {};


for (let i=0; i< str.length; i++) {
   
    let count = 0;

    for (let j=0; j<str.length; j++) {
        if (str[i] === str[j]) {
            count += 1;                      
        }      
    }
    
    if (count > 1) {
        dict[str[i]] = count 
    }
    else {
        dict[str[i]] = 1 ;
    }   
}

let max = 0;
let frequenrWord;

for (let k in dict) {
    
    if (max < dict[k]) {
        max = dict[k];
        frequenrWord = k
    }
}

console.log(frequenrWord);
