/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  https://leetcode.com/problems/majority-element-ii/
function count(num, n) {
  let c = 0;
  num.forEach((e) => (e === n ? c++ : " "));
  return c;
}

var majorityElement = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  let ele1 = -1;
  let ele2 = -2;
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] == ele1) {
      c1++;
    } else if (nums[i] == ele2) {
      c2++;
    } else if (c1 <= 0) {
      ele1 = nums[i];
      c1 = 1;
    } else if (c2 <= 0) {
      ele2 = nums[i];
      c2 = 1;
    } else {
      c1--;
      c2--;
    }
  }
  let res = [];
  count(nums, ele1) > nums.length / 3 ? res.push(ele1) : "";
  count(nums, ele2) > nums.length / 3 ? res.push(ele2) : " ";
  return res;
};

console.log(
  majorityElement([
    1, 1, 2, 3, 4, 1, 1, 5, 6, 7, 1, 1, 8, 9, 10, 1, 11, 12, 13, 14,
  ])
);
console.log(majorityElement([4, 1, 2, 3, 4, 4, 3, 2, 1, 4]));
console.log(majorityElement([3, 3, 4]));
console.log(majorityElement([2, 2]));
console.log(majorityElement([1, 2]));
