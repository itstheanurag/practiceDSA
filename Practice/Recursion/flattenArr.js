// write a program to flatten an array recursively

function flattenArr(arr){
    let ans = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            ans = ans.concat(flattenArr(arr[i]))
        }else{
            ans.push(arr[i])
        }
    }
    return ans
}

let res = flattenArr([1,3,4,[4,5,6], [2,3,5],23,[2,4,6,1]])
console.log(res)
