// write a program to find the maxium sum of size K

function maxSum(arr, k){
    let maxSum = 1/-0
    let sum = 0

    for(let i=0; i<k ; i++){
        sum += arr[i]
    }

    let i = 0
    for(let j=k; j<arr.length; j++,i++){
        sum += arr[j] - arr[i]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}

let res = maxSum([2,3,5,6,7,3,8,9,10], 3)
console.log(res)


function sumWithWhile(arr,k){
    let maxSum = 1/-0
    let sum = 0
    let j = 0
    let i = 0
    while(j<k){
        sum += arr[j]
        j++
    }
    
    j = k
    while(j<arr.length){
      sum += arr[j] - arr[i]
      i++
      j++
      maxSum = Math.max(maxSum, sum)
    }

    return maxSum
}

let ans = sumWithWhile([1,2,4,5,2,7,8,9,1], 3)
console.log(ans)