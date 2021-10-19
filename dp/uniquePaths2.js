// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (oG) {
  let m = oG.length;
  let n = oG[0].length;
  const dp = new Array(m).fill(0).map((_, i) => new Array(n).fill(0));
  if (oG[0][0] === 1 || oG[m - 1][n - 1] === 1) return 0;
  dp[0][0] = 1;
  for (let i = 1; i < m; ++i) {
    dp[i][0] = oG[i][0] === 1 ? 0 : dp[i - 1][0];
  }
  for (let i = 1; i < n; ++i) {
    dp[0][i] = oG[0][i] == 1 ? 0 : dp[0][i - 1];
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = oG[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [1, 1],
    [0, 0],
  ])
);
console.log(uniquePathsWithObstacles([[0], [1]]));
console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
