// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] - b[0] == 0) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });
  let res = [];
  let intStrt = 0;
  let intEnd = 1;
  let temp = intervals[0];
  for (let i of intervals) {
    if (temp[intEnd] >= i[intStrt]) {
      temp[intEnd] = Math.max(temp[intEnd], i[intEnd]);
    } else {
      res.push(temp);
      temp = i;
    }
  }
  res.push(temp);
  return res;
};
console.log(
  merge([
    [2, 8],
    [2, 3],
    [2, 5],
  ])
);
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
