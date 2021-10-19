/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  https://leetcode.com/problems/next-permutation/
function myReverse(a, i) {
  let j = a.length - 1;

  while (i < j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
  }
}

var nextPermutation = function (a) {
  let i = a.length - 1;

  while (i - 1 >= 0 && a[i] <= a[i - 1]) i--;

  if (i <= 0) {
    a.reverse();
    return;
  }

  let ind = i - 1;
  i = a.length - 1;
  let e = a[ind];
  while (e >= a[i] && i != ind) {
    i--;
  }
  if (i == ind) {
    i = ind - 1;
  }
  let temp = a[ind];
  a[ind] = a[i];
  a[i] = temp;
  myReverse(a, ind + 1);
  return a;
};
a = [1, 3, 2];
console.log(nextPermutation(a));
console.log(nextPermutation([1, 2, 1]));
console.log(nextPermutation([5, 4, 2, 1, 3]));
