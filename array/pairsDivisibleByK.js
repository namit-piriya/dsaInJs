var canArrange = function (arr, k) {
  let sum = arr.reduce((sum, curr) => {
    return sum + curr;
  });

  let remainder = sum % k;
  let ans = sum / k;
  if (ans * 2 === arr.length && remainder === 0) {
    return true;
  }
  return false;
};

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));
console.log(canArrange([1, 2, 3, 4, 5, 6], 7));
console.log(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3));
