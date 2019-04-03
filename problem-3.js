/*
Project Euler - Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// ================ Solution ================
// get function that checks if number is prime
// find smallest prime number that 600851475143 divides into without remainer
// take remainder and find next smallest prime number that that number divides into
// repeat until smallest prime is same as number being divided


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


let largestPrimeFactor = (x) => {
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

    console.log(`The largest prime factor of ${x} is ${primes[primes.length-1]}`)
    return(primes[primes.length-1])
}

largestPrimeFactor(600851475143);




