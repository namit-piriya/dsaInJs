function solve(nums, k) {
  nums.sort((a, b) => a - b);
  let curr = 0;
  while (curr <= nums.length - 2) {
    let l = curr + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r] + nums[curr];
      if (sum == k) return true;
      if (sum < k) {
        l++;
      } else r--;
    }
    curr++;
  }
  return false;
}

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let j, k;
  let res = [];
  let prevJ = NaN;
  let prevK = NaN;
  for (let i = 0; i < nums.length; ++i) {
    j = i + 1;
    k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      a = nums[i];
      b = nums[j];
      c = nums[k];
      if (a + b + c === 0) {
        ar = [a, b, c];
        res.push(ar);
        ++j;
        while (j < nums.length && nums[j] === nums[j - 1]) ++j;
        --k;
      } else if (a + b + c > 0) {
        --k;
      } else {
        ++j;
      }
    }
  }
  return res;
};

var threeSumBetter = function (nums) {
  let len = nums.length;

  nums.sort((a, b) => a - b);
  let res = [];

  for (let curr = 0; curr < nums.length - 2; curr++) {
    let l = curr + 1;
    let r = nums.length - 1;
    while (l < r) {
      let currSum = nums[curr] + nums[l] + nums[r];
      if (currSum === 0) {
        res.push([nums[curr], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) {
          l++;
        }
        while (nums[r] === nums[r - 1]) {
          r--;
        }

        l++;
        r--;
      } else if (currSum < 0) {
        l++;
      } else r--;
    }
    while (nums[curr] === nums[curr + 1]) {
      curr += 1;
    }
  }
  return res;
};
