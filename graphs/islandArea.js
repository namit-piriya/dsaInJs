/**
 * @param {number[][]} grid
 * @return {number}
 */

function isSafe(i, j, grid) {
  if (
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[0].length &&
    grid[i][j] != -1 &&
    grid[i][j] != 0
  )
    return true;
  return false;
}

function dfs(i, j, grid) {
  let x = [1, 0, 0, -1];
  let y = [0, 1, -1, 0];
  let sum = 0;
  for (let it = 0; it < 4; ++it) {
    let r = i + x[it];
    let c = j + y[it];
    if (isSafe(r, c, grid)) {
      grid[r][c] = -1;
      sum += 1;
      sum += dfs(r, c, grid);
    }
  }
  return sum;
}

var maxAreaOfIsland = function (grid) {
  let mm = 0;
  grid.forEach((arr, i) => {
    arr.forEach((ele, j) => {
      if (isSafe(i, j, grid)) {
        grid[i][j] = -1;
        mm = Math.max(mm, 1 + dfs(i, j, grid));
      }
    });
  });
  return mm;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
console.log(maxAreaOfIsland([[1]]));
