function helper(i, nums, target, sum) {
  let ans = 0;
  if (target == sum && i == nums.length - 1) {
    return 1;
  }
  if (i > nums.length) return 0;
  for (let j = i + 1; j < nums.length; j++) {
    ans += helper(j, nums, target, sum + nums[i]);
    ans += helper(j, nums, target, sum - nums[i]);
  }
  return ans;
}

var findTargetSumWays = function (nums, target) {
  return helper(0, nums, target, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
