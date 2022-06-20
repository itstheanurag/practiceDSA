// Roman to integer

var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]]
        let next = map[s[i + 1]]

        if (curr < next) {
            res += next - curr
            i++
        } else {
            res += curr
        }
    }
    return res
};

let result = romanToInt("III")
console.log(result)


//integer to roman

var intToRoman = function (num) {
    let obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = ''
    for (let item in obj) {
        while (num >= obj[item]) {
            roman += item
            num -= obj[item]
        }
    }
    return roman

};

let ans = intToRoman(1994)
console.log(ans)