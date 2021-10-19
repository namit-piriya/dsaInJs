// https://leetcode.com/problems/rotate-image/
var rotate = function (a) {
  let l = a.length;
  for (let i = 0; i < l - 1; ++i) {
    for (let j = i; j < l; ++j) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }
  for (let i = 0; i < l; ++i) {
    let front = 0,
      last = l - 1;
    while (front < last) {
      let temp = a[i][front];
      a[i][front] = a[i][last];
      a[i][last] = temp;
      front++;
      last--;
    }
  }
};

var rotate = function (a) {
  let l = a.length;
  for (let i = 0; i < l - 1; ++i) {
    for (let j = i; j < l; ++j) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }
  for (let i = 0; i < l; ++i) {
    let front = 0,
      last = l - 1;
    while (front < last) {
      let temp = a[i][front];
      a[i][front] = a[i][last];
      a[i][last] = temp;
      front++;
      last--;
    }
  }
};
