// write a program to check for anagram 

function areAnagram(str1, str2) {
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2)
        return false;

    // Sort both strings
    str1.sort();
    str2.sort()

    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}

//Time Complexity: O(nLogn)


//method two with frequency
var isAnagram = function (s, t) {

    let obj = {}
    if (s.length !== t.length) {
        return false
    }

    for (let char of s) {
        obj[char] = (obj[char] || 0) + 1
    }
    for (let items of t) {
        if (!obj[items]) {
            return false
        } else {
            obj[items] -= 1
        }
    }
    return true
};