//write a function that prits the fibonnaci series upto the n number

/*
function fibbonaci(num){
    let first = 0 
    let second = 1 
    let sum
    for(let i = 1; i<=num; i++){
        console.log(first)
         sum = first + second
         first = second
         second = sum
    }
}

fibbonaci(7)

*/

//write a program which check if the the given string is palindrome

/*
function isPalindrome(str){
   for(let i = 0; i<str.length/2; i++){
       if(str[i] != str[str.length-1-i]){
           return false   
       }
   }

   return true
}

let result = isPalindrome("22122")
console.log(result)

*/

//print a program to check if a number is prime or not

/*
function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i == 0 && i != num){
            return false
        } else{
            return true
        }
    }
    
}

console.log(isPrime(198))
*/

//write a function to print all the prime number upto a number


/*
function printPrimes(num){
    for (let i = 1; i <= num; i++) {
     let flag = 0;
 
     // looping through 2 to user input number
     for (let j = 2; j < i; j++) {
         if (i % j == 0) {
             flag = 1;
             break;
         }
     }

     // if number greater than 1 and not divisible by other numbers
     if (i > 1 && flag == 0) {
         console.log(i);
     }
  }
}

printPrimes(100)

*/

//write a programm to check how many times a number repeats in a bigger number
//for eg : 432535235 in this number 3 comes 3 times


/*

function countNum(number, num){
    let count = 0
    while(number > 0){
        let rem = (number % 10)
        if(rem == num)
            count++
        number = Math.floor(number/10)
    }
    return count
}

console.log(countNum(432535235, 5))


*/

//write a program to reverse a number


/*
function reverseNum(number){
    let ans = 0;
    while(number > 0){
        let rem = (number % 10)
        number = Math.floor(number/10) 
        ans = (ans * 10) + rem
    }
    return ans
}

console.log(reverseNum(24837533352))

*/

// how to write a factorial of a number

/*
function factorialize(num) {
  let sum = 1
  for(let i= num; i>0; i--){
    sum *= i
  }
  return sum;
}

let res = factorialize(5);
console.log(res)

*/


//write the factorail of a number recursively

/*

function factorialize(num) {
  if(num === 0) return 1
  if(num === 1) return 1
  return num * factorialize(num - 1)
}

let res = factorialize(5);
console.log(res)

*/

//Program to find the largest world length

/*

function findLongestWordLength(str) {
let arr = str.split(" ")
let maxLen = arr[0].length
   for(let i = 0 ; i<arr.length; i++){
     for(let j =i ; j<arr[i].length ; j++){
        if(maxLen<arr[i].length){
            maxLen = arr[i].length
        }
     }
   }
   return maxLen 
}

let res = findLongestWordLength("The quick brown fox jumped over the lazy dog")
console.log(res);

*/

// Make a string repeat itself the number of a times, passed in argument with the str


/*
function repeatStringNumTimes(str, num) {
    let newStr = ''
  for(let i=0;i<num;i++){
    newStr+=str
  } 
  return newStr
}

let res = repeatStringNumTimes("abc", 3);
console.log(res)

*/

//program to find the largest of four 2d array

/*

function largestOfFour(arr) {
  let newArr = []
  for(let i=0;i<arr.length;i++){
       let maxsum= 1/-0
   for(let j =0;j<arr[i].length;j++){
     if(maxsum<arr[i][j])
       maxsum = arr[i][j]
   }
   newArr.push(maxsum)
  }
  return newArr
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/
