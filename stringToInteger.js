const str = "123456";
let val = 0;

for (let i=0; i<str.length; i++) {
    
    let code = str.charCodeAt(i);
    //console.log(code)
    let digit = code - "0".charCodeAt(0);  
    //console.log(digit)
    val = val*10 + digit
    // console.log(val)
}

console.log(val);