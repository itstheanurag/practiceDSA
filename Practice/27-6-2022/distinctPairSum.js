//count distinct pairs with given sum

function countPairs(arr,target) {
    const obj1={}
    let n,count=0
    const indexArr=[]
    for (let i = 0; i < arr.length; i++) {
        n=arr[i]
        if (obj1[target-n]>=0) {
            indexArr.push(i)
            indexArr.push(obj1[target-n])
            count++
        }else{
            obj1[n]=i
        }
    }
    return indexArr.length/2
}
console.log(countPairs([2,0,5,9,13,4,8,3],13))  //ans:3

// sumDistintPair

function sumDistintPair(arr, sum) {
    const elemSet = new Set();
    const seenSet = new Set();
  
    let count = 0;
    for (let currValue of arr) {
      const nextValue = sum - currValue;
      if (elemSet.has(nextValue) && !seenSet.has(currValue)) {
        count++;
        seenSet.add(nextValue);
        seenSet.add(currValue);
      }
      elemSet.add(currValue);
    }
    return count;
  }
  console.log(sumDistintPair([1, 5, 1, 5], 6));