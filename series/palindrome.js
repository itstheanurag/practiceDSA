// write a program to find the palindrome Number leetcode 9

var isPalindromeNum = function(x) {
    let negative = x<0?true: false;
      if(negative){
          return false
      }
      const num = x
      let ans = 0
      while(x>0){
          ans = (ans*10)+(x%10)
          x= parseInt(x/10)
      }
      return num==ans
};

let answer = isPalindromeNum(656)
console.log(answer)

// write a program to check for valid palindrom leetcode 125

var isPalindrome = function(str) {
    str = str.toLowerCase()
    function properStr(s){
        let alphabets = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let map = {}
        for(let val of alphabets){
            map[val] = (map[val] || 0) + 1
        }
        let str = '';
        for(let letter of s){
            if(map[letter]){
                str += letter
            }
        }
        return str
    }
    let word = properStr(str);
    let i = 0;
    for(let j = word.length-1; j > 0; j--){
        if(word[i] !== word[j]){
            return false;
        }
        i++
    }
    return true
};

let res = isPalindrome("A man, a plan, a canal: Panama")
console.log(res)

