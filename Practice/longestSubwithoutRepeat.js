// longest substring without a repeating character

var lengthOfLongestSubstring = function(s) {
    if(!s ||s.length===0){
        return 0
    }
    
    let end = 0
    let start = 0
    let maxLength = 0
    const UniqueCharacters = new Set()
    
    while(end<s.length){
        if(!UniqueCharacters.has(s[end])){
            UniqueCharacters.add(s[end]);
            end++
            maxLength = Math.max(maxLength, UniqueCharacters.size)
        }else{
            UniqueCharacters.delete(s[start]);
            start++
        }
    }
    return maxLength
};

let res = lengthOfLongestSubstring("abcabcbb")
console.log(res)