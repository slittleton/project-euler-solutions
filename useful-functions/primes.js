/* Finding Prime numbers
the only even prime number is 2, 
all other even numbers can be discarded
when checking you can start at 3 and increment by 2, this will check only odds
you can use the square root of n to reduce iterations of for loop.
to find the biggest factors of x
n = x * y 
once y gets as big as x then you are doing n = x*x
once y gets bigger than x then you are just reversing the multiplied pairs
n = y * x
example: 12 = 1*12, 2*6, 3*4, 4*3, 6*2, 12*1
square root of 12 is about 3.46, notice that once you reach 3 the numbers
multiplied flip spots. There is no need to test 3*4 and 4*3.
*/


// ============== Test If Number is Prime ===============
let primeChecker = (n) => {
    if (n === 2 ) {
        return true;
    }
    if ( n < 2 || n % 2 === 0 ){
        return false
    }
    for(let i = 3; i < Math.sqrt(n); i += 2){
        if( n % i === 0 ) {
            return false
        }
    }
    return true
}


// ============== Generate List of Prime Numbers ==============

let listOfPrimes = (x) => {
    let primesList = [];
    let num = x;
    if (num >= 2) {
        primesList.push(2)
    }
    if (num === 2) {
        primesList.push(2);
        return primesList
    }
    for( let i = 3; i < num; i += 2 ){ 
        // reduces number of loops by only looking at odds
       if (primeChecker(i)){
           primesList.push(i)
       }
    }

    return primesList;
}

// ============== Generate List of Prime Factors ==============
// prime factors are prime numbers that when multiplied together 
// give the number you want the factors of

let primeFactors = (x) => {
    let num = x;
    let primes = [];
    if(num % 2 === 0){
        num  = num/2
        primes.push(2)
    }

    for( let i = 3; i <= num; i+=2){
        if (primeChecker(i)){         
            if( num % i === 0){
                primes.push(i);
                num /= i;
            }
        }
    }

    return(primes)
}





