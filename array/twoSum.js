var twoSum = function (nums, target) {
  let s = new Map();
  nums.forEach((n, ind) => {
    s.set(n, ind);
  });
  let result;
  nums.forEach((n, index) => {
    let diff = target - n;
    if (s.has(diff)) {
      if (!result && s.get(diff) != index) result = [s.get(diff), index];
    }
  });
  return result;
};

var twoSum2Ptr = function (nums, target) {};
