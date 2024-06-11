let list = ["flower", "flow", "flight"]
let least = list[0].length;

let reqItem = "";
let result = "";

for (let item of list){
    //console.log(item);

    if (least > item.length){
       // least = item.length;
        reqItem = item
        
    }  
}


for (let i=0; i < reqItem.length; i++){
    //console.log(reqItem)

    let count = 0;
    let word = reqItem[i];
    // console.log(word);

    for (let j=0; j < list.length; j++){
        
        if (word === list[j][i]){
            count += 1
        }
        
    }

    if (count === list.length){
        result += word
    }
    
}

console.log(result)