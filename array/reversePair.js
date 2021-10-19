/**
 * @param {number[]} nums
 * @return {number}
 */

function merge(nums, i, j, mid) {
  let size = j - i + 1;
  let temp = new Array(size);
  let p = 0;
  let l = i;
  let r = mid + 1;
  let flag = false;
  let sum = 0;
  while (l <= mid && r <= j) {
    if (nums[l] > 2 * nums[r] && !flag) {
      flag = true;
      sum += r - l;
    }
    if (nums[l] <= nums[r]) {
      temp[p++] = nums[l++];
    } else {
      temp[p++] = nums[r++];
    }
  }
  while (l <= mid) {
    if (nums[l] > 2 * nums[r] && !flag) {
      flag = true;
      sum += r - l;
    }
    temp[p++] = nums[l++];
  }
  while (r <= j) {
    temp[p++] = nums[r++];
  }
  let ptr = 0;
  for (let k = i; k <= j; k++) {
    nums[k] = temp[ptr++];
  }
  return sum;
}

function helper(nums, i, j) {
  if (i >= j) return 0;
  let mid = Number.parseInt((i + j) / 2);
  let l = helper(nums, i, mid);
  let r = helper(nums, mid + 1, j);
  let c = merge(nums, i, j, mid);
  return l + r + c;
}

var reversePairs = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

console.log(reversePairs([2, 1]));
console.log(reversePairs([2, 4, 3, 5, 1]));
console.log(reversePairs([1, 3, 2, 3, 1]));
