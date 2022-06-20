// leetcode 557 - reverse words 

var reverseWords = function(s) {
    let res = "";
    for(let i = s.length - 1; i >= 0; i --){
        res += s[i];
    }
    let arr = res.split(" ").reverse().join(" ")
    return arr
};

