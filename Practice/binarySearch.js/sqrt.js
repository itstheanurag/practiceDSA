//find the sqrt of a num without using any inbuilt method

let mySqrt = function (num) {
  if (num < 2) {
    return num;
  }

  let left = 1;
  let right = num / 2 + 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      right = mid;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return -1; //we will change this to left-1 in case we want to find the highest possible number less than the sqrt of num
};

let result = mySqrt(5)
console.log(result)