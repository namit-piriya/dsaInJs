/**  https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySumWrong = function (a, k) {
  let i = 0;
  let j = 0,
    result = 0;
  let sum;
  sum = a[i];
  while (j < a.length) {
    while (sum < k) {
      sum += a[j];
      j++;
    }
    if (sum == k) {
      result++;
      sum = sum - a[i];
      i++;
    }
    while (sum > k) {
      sum = sum - a[i];
      i++;
    }
  }
  return result;
};
var subarraySum = function (nums, k) {
  let prefixSum = new Array(nums.length);

  sum = 0;
  nums.forEach((e, ind) => {
    sum += e;
    prefixSum[ind] = sum;
  });
  const m = new Map();
  let ans = 0;
  prefixSum.forEach((e) => {
    if (e === k) ans++;
    let remain = e - k;
    if (m.has(remain)) ans += m.get(remain);
    if (m.has(e)) m.set(e, m.get(e) + 1);
    else m.set(e, 1);
  });
  return ans;
};

console.log(subarraySum([1], 0));
