let num1 = '123456789123456789';
let num2 = '987654321987654321';

let carry = 0;
let total = '';

for(let i=0;i<num1.length;i++){

    let sum = parseInt(num1[num1.length-i-1]) + parseInt(num2[num2.length-i-1]) + carry;
    // console.log(sum);
    let lastDigit = sum % 10;
    carry = Math.floor(sum/10);   
   // console.log(carry)
    total = lastDigit.toString() + total;

}

console.log(total)