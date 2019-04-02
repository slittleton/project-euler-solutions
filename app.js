
let arr2 = []
for (let i = 1; i < 1000; i++){
    if(3 * i >= 1000 ){ 
        break
    }
        let threes = 3 * i;
        if(threes <= 1000){ arr2.push(threes) }
    
        let fives = 5 * i;
        if( fives <= 1000 && fives % 3 !== 0){ arr2.push(fives) }


}

arr2 = [... new Set(arr2)]
    .sort(function(a,b){ return a - b })
    .reduce((num,acc)=> num += acc);

console.log(arr2);

