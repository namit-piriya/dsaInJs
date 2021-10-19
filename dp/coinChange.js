// https://leetcode.com/problems/coin-change/
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    coins.forEach((coin) => {
      coinDiff = i - coin;
      if (coinDiff >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[coinDiff]);
      }
    });
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
