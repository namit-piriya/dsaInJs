var rotate = function (nums, k) {
  k = k % nums.length;
  for (let i = nums.length - 1; i >= k; i--) {
    let rotateInd = Number.parseInt((i + k) / (nums.length - 1));
    [nums[i], nums[rotateInd]] = [nums[rotateInd], nums[i]];
  }
};
a = [1, 2, 3, 4, 5, 6, 7];
rotate(a, 2);
console.log(a);
