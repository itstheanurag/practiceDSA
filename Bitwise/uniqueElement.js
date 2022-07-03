// write a program to fidn the unique element of an arr

function unique(arr){
    let ans = 0
    for(let el of arr){
        ans ^= el
    }
    return ans
} // this only works, when all other elements are in pairs

let res = unique([3,4,5,3,4,5,2,6,6])
console.log(res)