// https://leetcode.com/problems/combination-sum/
function helper(ind, nums, t, curr, res) {
  if (t == 0) {
    return res.push(curr.slice()); // returns new array
  }

  for (let i = ind; i < nums.length; i++) {
    let n = nums[i];
    if (n <= t) {
      curr.push(n);
      i = i + 1;
      while (nums[i] == nums[i + 1]) i++;
      helper(i, nums, t - n, curr, res);
      curr.pop();
    }
  }
}

var combinationSum2 = function (candidates, target) {
  let res = [];
  let curr = [];
  candidates.sort((a, b) => a - b);
  helper(0, candidates, target, curr, res);
  return res;
};

console.log([10, 1, 2, 7, 6, 1, 5], 8);
