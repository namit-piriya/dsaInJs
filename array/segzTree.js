var NumArray = function (nums) {
  this.nums = nums;
  this.st = new Array(4 * nums.length);
  this.build(0, 0, nums.length - 1);
};

NumArray.prototype.build = function (ind, l, r) {
  if (l == r) {
    return (this.st[ind] = this.nums[l]);
  }
  let left = 2 * ind + 1;
  let right = 2 * ind + 2;
  let mid = Number.parseInt((l + r) / 2);
  let ls = this.build(left, l, mid);
  let rs = this.build(right, mid + 1, r);
  return (this.st[ind] = ls + rs);
};

function updateHelper(st, ind, ti, update, l, r) {
  if (l == ti && r == ti) {
    let temp = st[ind];
    st[l] = update;
    return update - temp;
  }

  const mid = Number.parseInt((l + r) / 2);
  if (ti <= mid) {
    let diff = updateHelper(st, 2 * ind + 1, ti, update, l, mid);
    st[ind] += diff;
    return diff;
  } else {
    let diff = updateHelper(st, 2 * ind + 2, ti, update, mid + 1, r);
    st[ind] += diff;
    return diff;
  }
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  updateHelper(this.st, 0, index, val, 0, this.nums.length - 1);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {

};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

const a = new NumArray([1, 2, 3, 5, -6]);

console.log("original", a.st);
a.update(2, 5);
console.log(a.st);
