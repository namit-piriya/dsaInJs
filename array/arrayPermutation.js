var permute = function (nums) {
  if (nums.length <= 1) return [nums];
  return nums.map((ele, ind) => {
    const left = nums.slice(0, ind);
    const right = nums.slice(ind + 1);
    const myarray = [...left, ...right];
    const ans = permute(myarray);
    myans = ans.map((arr) => arr.push(ele));
    console.log(myans);
    return myans;
  });
};

console.log(permute([1, 2]));
