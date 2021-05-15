// https://leetcode.com/problems/combination-sum/
function helper(ind, nums, t, curr, res) {
  if (t == 0) {
    // console.log(curr);
    return res.push(curr.slice()); // returns new array
  }
  for (let i = ind; i < nums.length; i++) {
    let n = nums[i];
    if (n <= t) {
      curr.push(n);
      helper(i, nums, t - n, curr, res);
      curr.pop();
    }
  }
}

var combinationSum = function (candidates, target) {
  let res = [];
  let curr = [];
  helper(0, candidates, target, curr, res);
  return res;
};

res = [];
console.log(combinationSum([2, 1, 3, 4], 5));
