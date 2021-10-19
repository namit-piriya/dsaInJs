// https://leetcode.com/problems/combination-sum/
function helper(ind, nums, t, curr, res) {
  if (t == 0) {
    return res.push(curr.slice()); // returns new array
  }

  for (let i = ind; i < nums.length; i++) {
    if (i > ind && nums[i - 1] === nums[i]) continue;
    let n = nums[i];
    if (n <= t) {
      curr.push(n);
      helper(i + 1, nums, t - n, curr, res);
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

require("./array/reversePair");
