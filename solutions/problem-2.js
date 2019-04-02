/*
Project Euler - Problem 2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

let arr = [1,2]
let x = 0;
while(x < 4000000){
    x = arr[arr.length-1] + arr[arr.length-2]
    if(x >= 4000000){break}
    arr.push(x);
}
arr = arr.filter( elem => elem % 2 === 0 )
          .reduce( (elem, acc) => elem + acc )

console.log(arr);