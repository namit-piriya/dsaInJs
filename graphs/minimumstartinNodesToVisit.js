// https://binarysearch.com/problems/Minimum-Starting-Nodes-to-Visit-Graph

function solve(edges) {
  let m = new Map();
  for (let i = 0; i < edges.length; ++i) {
    if (m.has(edges[i][1])) {
      m.set(edges[i][1], m.get(edges[i][1]) + 1);
    } else m.set(edges[i][1], 1);
    if (!m.has(edges[i][0])) m.set(edges[i][0], 0);
  }
  const keys = m.keys();
  let res = [];
  for (let a of keys) {
    console.log(a);
    m.get(a) === 0 ? res.push(a) : " ";
  }
  return res.sort((a, b) => a - b);
}

console.log(
  solve([
    [0, 1],
    [1, 2],
    [3, 2],
  ])
);
