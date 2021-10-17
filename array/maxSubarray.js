// https://leetcode.com/problems/maximum-subarray/submissions/
var maxSubArray = function (nums) {
  let sum = 0,
    maxSum = 0;
  for (let i = 0; i < nums.length; ++i) {
    //  add number to the sum
    sum += nums[i];
    //  if the sum is greater than max sum reassign max sum
    if (sum > maxSum) {
      maxSum = sum;
    }
    // if sum is less than 0 than we cannot have a +ve sum
    // reassign sum to 0
    if (sum < 0) sum = 0;
  }
  //   if we didnt find any maxsum than take the maximum -ve number
  if (maxSum == 0) {
    maxSum = Math.max(...nums);
  }
  return maxSum;
};
