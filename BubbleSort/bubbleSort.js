// write the Bubble sort algorithm

/*  pseudoCode

Start looping from the end of the array to the beginning
start an inner Loop with a variable called j from the beginnig until i-1
if arr[j] is greater than arr[j+1], swap those two variable
return the array

*/

function bubbleSort(arr){
    for(let i = arr.length ; i> 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

let ans = bubbleSort([5,3,6,2,6,8,45,-3,-4,-8,13])
console.log(ans)