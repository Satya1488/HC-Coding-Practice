const str = "[()]{";
let count = 0;

for (let i=0; i < str.length; i++) {
    
    if (str[i] === "(" && str[i+1] === ")" ) {
        count += 2;
    }
    
    else if (str[i] === "[" && str[i+1] === "]" ) {
        count += 2;
    }

    else if (str[i] === "{" && str[i+1] === "}" ) {
        count += 2;
    }

}

console.log(count);