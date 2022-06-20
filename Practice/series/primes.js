// count primes upto a number leetcode 204

var countPrimes = function (n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) count++;
    }
    return count;
};

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

// this solution does work, but it takes way too much time.

// better way to solve this question is by Sieve of Eratosthenes 