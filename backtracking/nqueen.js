function isSafe(i, j, grid) {
  console.log(i, j, grid);
  for (let r = i; r >= 0; r--) {
    if (grid[r][j] === "Q") return false;
  }
  for (let r = i, c = j; r >= 0 && c < grid.length; r--, c++)
    if (grid[r][c] === "Q") return false;

  for (let r = i, c = j; r >= 0 && c >= 0; r--, c--)
    if (grid[r][c] === "Q") return false;

  return true;
}

function nqHelp(start, grid, ans) {
  let temp = [];
  if (start == grid.length) {
    console.log(grid);
    grid.forEach((a) => {
      temp.push(a.join(""));
    });
    ans.push(temp);
    return;
  }

  for (let i = 0; i < grid.length; ++i) {
    if (isSafe(start, i, grid) === true) {
      grid[start][i] = "Q";
      nqHelp(start + 1, grid, ans);
      grid[start][i] = ".";
    }
  }
}

var solveNQueens = function (n) {
  let grid = [];

  for (let i = 0; i < n; i++) {
    let temp = new Array(n);
    for (let j = 0; j < n; j++) {
      temp[j] = ".";
    }
    grid.push(temp);
  }
  let ans = [];
  nqHelp(0, grid, ans);
  return ans;
};

console.log(solveNQueens(4));
