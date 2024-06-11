const arr = [123, 121, 454, 567, 545];

let res = [];
for(let i of arr) {
    
    let num = i;
    let rev = 0;   
    while (num > 0) {

        let remainder = num%10;
        rev = rev * 10 + remainder;
        num = Math.floor(num/10);
    }
  
    if (rev === i) {
        res.push(i)   
    } 
}

console.log(res);