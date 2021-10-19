function solve(str) {
  if (!str || str.length === 0) return [""];
  if (str.length === 1) return [str];
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let sub = str.slice(0, i) + str.slice(i + 1);
    let r = solve(sub);
    let a = r.map((my) => str[i] + my);
    res = res.concat(a);
  }
  return res;
}

console.log(solve("abs"));
