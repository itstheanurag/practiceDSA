// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    let target = 0
    nums.sort((a,b)=>{return a-b})
    let result = []
    for(let i=0;i<nums.length; i++){
       if(i>0 && nums[i]==nums[i-1]) continue
       for(let j =i+1;  j<nums.length; j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue
           for(let k=j+1;k<nums.length; k++){
                if(k>j+1 && nums[k]==nums[k-1]) continue
             if(nums[i]+nums[j]+nums[k]=== target){
               result.push([nums[i],nums[j],nums[k]])
              }
           }
       }
   }
    return result
};

const res = threeSum([-1,0,1,2,-1,-4])
console.log(res)