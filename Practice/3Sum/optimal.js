

var threeSum2 = function (nums) {
    nums.sort((a, b) => { return a - b })
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let target = 0 - nums[i]
        let left = i + 1
        let right = nums.length - 1

        while (right > left) {
            let sum = nums[left] + nums[right];
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++
                right--
            }
        }
    }
    return result
};




// fastest solution

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue
        }

        let num = nums[i] // -1
        let start = i + 1 // 2
        let end = nums.length - 1 // 6

        while (start < end) {
            const curSum = num + nums[start] + nums[end]

            if (curSum < 0) {
                start++
            } else if (curSum > 0) {
                end--
            } else {
                res.push([num, nums[start], nums[end]])
                start++
                while (start < end && nums[start] === nums[start - 1]) {
                    start++
                }
            }
        }
    }

    return res
};

let res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res)
