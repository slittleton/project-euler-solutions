/* 
Project Euler - Problem 4
A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


// Use while loop to find smaller and smaller palindrome numbers
// check each palindrome number 
// start trying to divide the palindrome by all three digit numbers
// start with highest 3 digit num and work downward
// if the result produced from this is also a 3 digit number with no remainder
// then break the loop and console log the results

let testNum = 999 * 999;
let num1;
let num2;
let testPal;

let y = true;
let arr = [];
let count = 0;


while(y === true){
    count++;
    testNum --;

    let firstHalf = testNum.toString().slice(0,3);
    let secondHalf = testNum.toString().slice(3,6);
    let reversed = firstHalf.split("").reverse().join("")
    
    // if number is palindrome add to list and test it
    if(reversed === secondHalf){ 
        arr.push(testNum)

        testPal = testNum;
        for(let i = 999; i > 0; i--){
            console.log('testing number', testNum);

            if(testPal%i === 0 && (Math.floor(testPal/i)).toString().length === 3){
                num1 = i;
                num2 = testPal/i
                y = false;
                break
            }
        }

    }
    
    if(y === false){
        console.log('tested numbers', arr);
        break
    }
}

console.log('first number is', num1);
console.log('second number is', num2);
console.log('palindrome number is ', testPal)
console.log('count',count);

/*
first number is 993
second number is 913
palindrome number is  906609
count 91392
*/



// // ============== TWO DIGIT TEST ==================
// let testNum = 99 * 99;

// let num1;
// let num2;

// let y = true;
// let arr = [];
// let count = 0;
// let testpal;

// while(y === true){
//     count++;
//     testNum --;

//     let firstHalf = testNum.toString().slice(0,2);
//     let secondHalf = testNum.toString().slice(2,4);
//     let reversed = firstHalf.split("").reverse().join("")
    
//     // if number is palindrome add to list and test it
//     if(reversed === secondHalf){ 
//         arr.push(testNum)

//         testPal = testNum;
//         for(let i = 99; i > 0; i--){
//             console.log(testNum);

//             if(testPal%i === 0 && (Math.floor(testPal/i)).toString().length === 2){

//                 num1 = i;
//                 num2 = testPal/i

//                 y = false;
//                 break
//             }

//         }

//     }

//     if(y === false){
//         console.log(arr);
//         break
//     }
// }
// console.log('first number is', num1);
// console.log('second number is', num2);
// console.log('palindrome is', testPal)
// console.log('count',count);