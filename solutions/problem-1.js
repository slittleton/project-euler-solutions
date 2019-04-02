
/*
Project Euler - Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// ================ Solution ================
let arr = [];

for( let i = 1; i < 1000; i++){
    if( i % 3 === 0 ){
        arr.push(i);
    } else if ( i % 5 === 0 ) {
        arr.push(i)
    }
}

arr = [...new Set(arr)]
        .sort(function(a,b){ return a - b })
        .reduce((num,acc)=> num += acc);

console.log(arr); //233168

// ================ more efficient solution ================

let arr2 = []
for (let i = 1; i < 1000; i++){
    
    let threes = 3 * i;
    let fives = 5 * i;

    if( threes >= 1000 ) { break };
    if( threes < 1000 ){ arr2.push(threes) };
    if( fives < 1000 && fives % 3 !== 0 ){ arr2.push(fives) };

}

let y = arr2
arr2 = [... new Set(arr2)]
    .sort(function(a,b){ return a - b })
    .reduce((num,acc)=> num += acc);

console.log(arr2); //233168