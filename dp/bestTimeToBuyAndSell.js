// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
var maxProfit = function (prices) {
  let min = Number.MAX_VALUE;
  let currMax = Number.MIN_VALUE;
  prices.forEach((num, index) => {
    min = Math.min(num, min);
    currMax = Math.max(currMax, num - min);
  });
  return currMax;
};
