// leetcode 268 - Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    const length = nums.length;
   let sum = ((length + 1) * length) / 2;
 
   for (let i = 0; i < length; i++) {
     sum = sum - nums[i];
   }
 
   return sum;
};

// we can also do a Binary on this

var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
     let left=0
     let right=nums.length-1
    while(left<=right){
         let mid =Math.floor(left+(right-left)/2) ;
         if(nums[mid]>mid) right = mid-1;
         else left = mid+1;
     }
     return left;
 };