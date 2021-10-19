var setZeroes = function (matrix) {
  let col = false;
  if (matrix[0][0] == 0) col = true;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix.length; ++j) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  console.log(matrix);
  for (let i = 1; i < matrix.length; ++i) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < matrix.length; ++j) {
        matrix[j][i] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[i][0] == 0) {
      for (let j = 0; j < matrix.length; ++j) {
        matrix[i][j] = 0;
      }
    }
  }
  // console.log(matrix);
  if (col) {
    for (let i = 0; i < matrix.length; ++i) {
      matrix[0][i] = 0;
    }
  }
};

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
// console.log(matrix);
