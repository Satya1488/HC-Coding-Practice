const str = "abba";


function isPalindrome(str) {

    let leftChar = 0;
    let rightChar = str.length-1;

    while (leftChar < rightChar) {

        if (str[leftChar] !== str[rightChar]) {
            return false
        }
        leftChar += 1;
        rightChar -= 1;   
    }
    
    return true;  
    
}

let r = isPalindrome(str);
console.log(r)