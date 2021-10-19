// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  let zeroTouched = false;
  let zeroIndex = -1;
  nums.forEach((num, ind) => {
    let index = Math.abs(num);
    if (num === 0) zeroIndex = ind;
    if (index < nums.length) {
      nums[index] = -nums[index];
      if (nums[index] === 0) zeroTouched = true;
    }
  });

  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) return i;
  }
  if (zeroIndex !== -1 && !zeroTouched) {
    return zeroIndex;
  }
  return nums.length;
};

console.log(missingNumber([0, 1]));
