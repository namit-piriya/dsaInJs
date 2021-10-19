// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  let sMap = new Map();
  s.split("").forEach((c) => {
    if (sMap.has(c)) sMap.set(c, sMap.get(c) + 1);
    else {
      sMap.set(c, 1);
    }
  });
  t.split("").forEach((c) => {
    if (sMap.has(c)) sMap.set(c, sMap.get(c) - 1);
    else {
      sMap.set(c, -1);
    }
  });

  let ans = true;
  for (let [k, v] of sMap) {
    if (v != 0) {
      ans = false;
      break;
    }
  }
  return ans;
};
