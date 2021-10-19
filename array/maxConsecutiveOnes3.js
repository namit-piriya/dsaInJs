// https://leetcode.com/problems/max-consecutive-ones-iii/
var longestOnes = function (nums, k) {
  let i = 0;
  let maxNo = 0;
  let remaining = k;
  let j = 0;
  while (i < nums.length && j < nums.length) {
    while (j < nums.length && (remaining > 0 || nums[j] == 1)) {
      if (nums[j] === 0) {
        remaining--;
      }
      j++;
    }
    maxNo = Math.max(maxNo, j - i);
    while (remaining <= 0 && i < nums.length) {
      i++;
      if (nums[i] === 0) {
        remaining++;
      }
    }
  }
  return maxNo;
};
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
