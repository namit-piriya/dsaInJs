// https://leetcode.com/problems/longest-consecutive-sequence
var longestConsecutive = function (nums) {
  const s = new Set(nums);
  let maxAns = 0;
  let ans = 0;
  nums.forEach((n) => {
    if (!s.has(n + 1)) {
      ans = 1;
      n = n - 1;
      while (s.has(n)) {
        n--;
        ans++;
      }
      if (ans > maxAns) maxAns = ans;
    }
  });
  return maxAns;
};

/*
insert all the nums in set,
then check if a number+1 exist then do not do anything
but if a no+1 does not exist then this might be the last no of consecutive sequence
so check  all consecutive numbers lesser than current;
*/
