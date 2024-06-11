let str="()[]{}";
let count=0;

for (let i=0;i<str.length;i++){

    if (i%2===0){
        if (str[i+1]===")" && str[i]==="("){
            count+=1
        }
        else if(str[i+1]==="]" && str[i]==="["){
            count+=1
        }
        else if(str[i+1]==="}" && str[i]==="{"){
            count+=1
        }
    }
    
}

//console.log(str.length/2)

if (count===(str.length)/2){
    console.log("True")
}
else{
    console.log("False")
}