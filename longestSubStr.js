let str = "abcabcbb";
let longest = [];
let string = "";

for (let item of str){
    if(string.includes(item) === true){
        //console.log(string)
        longest.push(string);
        string = "";
        string += item;
    }

    else{

        string += item;
    }
    
}

//console.log(longest)


let maximum=longest[0].length;

for (let item of longest){

    if (maximum < item.length){
        maximum = item.length;
    }
}

console.log(maximum);