function helper(grid, row, col, rs, result) {
  if (row == grid.length - 1 && col == grid.length - 1) {
    result.push(rs);
  }

  let x = [1, 0, 0, -1];
  let y = [0, 1, -1, 0];
  let dir = ["D", "R", "L", "U"];
  for (let j = 0; j < 4; ++j) {
    let r = row + x[j];
    let c = col + y[j];
    if (canVisit(r, c, grid)) {
      grid[r][c] = -1;
      let temp = rs + dir[j];
      helper(grid, r, c, temp, result);
      grid[r][c] = 1;
    }
  }
}
function canVisit(i, j, grid) {
  let l = grid.length;
  let g = grid;
  return i < l && i >= 0 && j >= 0 && j < l && g[i][j] == 1;
}

function findPath(m, n) {
  let result = [];
  let r = "";
  m[0][0] = -1;
  helper(m, 0, 0, r, result);
  return result;
}

console.log(
  findPath([
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ])
);
console.log(
  findPath([
    [1, 1],
    [1, 1],
  ])
);
console.log(
  findPath([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
console.log(
  findPath([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
console.log(
  findPath([
    [1, 0],
    [1, 0],
  ])
);
console.log(
  findPath([
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
// DDRDRR DRDDRR
