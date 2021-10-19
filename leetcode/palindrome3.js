var countPalindromicSubsequence = function (s) {
  let m = new Map();
  let c = s.split("");
  c.forEach((ch, i) => {
    if (m.has(ch)) {
      let mArr = m.get(ch);
      let lgt2 = mArr.length > 1;
      mArr[1] = i;
    } else m.set(ch, [i]);
  });
  let it = m.keys();

  let ans = 0;
  for (let c of it) {
    let arr = m.get(c);
    // console.log(arr);
    if (arr.length > 1) {
      ans += arr[1] - arr[0] - 1;
    }
  }
  return ans;
};

console.log(countPalindromicSubsequence("bbcbaba"));
