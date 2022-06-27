// write a function to remove the duplicate elements from the array

function uniqueArr(arr){
    let map = new Map()
    
    for(let el of arr){
        if(map.get(el)){
            map.set(el, map.get(el) + 1)
        }else{
            map.set(el, 1)
        }
    }
    let ans = []
    
    for(let el of map){
        if(el[1] === 1){
            ans.push(el[0])
        }
    }
    
    return ans
}

let res = uniqueArr([1,22,3,4,6,7,1,3])
console.log(res)


