/*
function maxSumOfSubarray(arr, k){

        let res = 0;
        for (let i=0; i<k; i++)
        res += arr[i];

        let curr_sum = res;
        let n = arr.length

        for (let i=k; i<n; i++)
        {
            curr_sum += arr[i] - arr[i-k];
            res = Math.max(res, curr_sum);
        }
     
        return res;
}

let result = maxSumOfSubarray([1,3,-1,-3,5,3,6,7], 3 )
console.log(result)
*/



/*
function totalWindowFormed(arr,k){
    let n = arr.length
    let result =  []

    for(let j =0;j<n-k+1;j++ ){
        let max = arr[j]
        for(let i =j; i<j+k; i++){
            if(max<arr[i]){
                max = arr[i]
            }
        }
        result.push(max)
    }
    console.log(result)
    return result.length
}

let result = totalWindowFormed([1,3,-1,3,5,3,6,7], 3)
console.log(result)
*/

