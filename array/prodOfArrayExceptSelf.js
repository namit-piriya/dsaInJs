/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let hasZero = false;
  let prod = 1;
  let prev = null;
  let allNotZero = false;
  nums.forEach((e) => {
    if (e !== 0) {
      prod *= e;
      allNotZero = true;
    } else {
      hasZero = true;
    }
  });

  if (!allNotZero) return nums.map((e) => 0);

  return nums.map((e) => {
    if (hasZero) {
      if (e != 0) return 0;
      else return prod;
    } else {
      return prod / e;
    }
  });
};

var productExceptSelf2 = function (nums) {
  let res = new Array(nums.length);
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let r = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    res[i] = res[i] * r;
    r *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([1, 0]));
console.log(productExceptSelf([1, 2, 0]));

console.log(productExceptSelf2([1, 0]));
console.log(productExceptSelf2([1, 2, 0]));
