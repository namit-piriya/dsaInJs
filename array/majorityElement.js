var majorityElement = function (nums) {
  let m = new Map();
  nums.forEach((n) => {
    if (m.has(n)) m.set(n, m.get(n) + 1);
    else m.set(n, 1);
  });
  let entries = m.entries();
  let ans = nums[0];
  for (let [key, value] of entries) {
    if (m.get(ans) < value) {
      ans = key;
    }
  }
  return ans;
};

console.log(majorityElement([1, 1]));
