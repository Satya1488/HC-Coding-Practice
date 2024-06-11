const arr = [123, 121, 454, 567, 545];
const num = 121;

function isPalindrome(arr, num) {

    let palindromeNums = []; 

    for (let i of arr) {

        let rev = 0;
        let number = i;
        
        while (number > 0) {
            let remainder = number % 10;
            //console.log(remainder);
            rev = rev * 10 + remainder;
            //console.log(rev)
            number = Math.floor(number / 10);
            // console.log(number)
            
        }

        if (rev === i) {
            palindromeNums.push(rev);   
        }
       
    }
    
    if (palindromeNums.includes(num)) {
        console.log('Given Number is Palindrome')
    }
    else {
        console.log('Given Number is Not a Palindrome')
    }

    console.log(palindromeNums)
}

isPalindrome(arr, num);