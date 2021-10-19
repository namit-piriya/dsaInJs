class Solution {
  solve(edges, a, b) {
    let graph = {};
    for (let i = 0; i < edges.length; ++i) {
      let to = edges[i][0];
      let from = edges[i][1];
      if (!graph[from]) graph[from] = [];
      else graph[from].push(to);
    }
    let propertyArr = Object.getOwnPropertyNames(graph);
    let visited = new Array(propertyArr.length);
    let aSet = new Set();
    dfs(graph, visited, a, aSet);
    let bn = graph[b];
    console.log(graph);
    bn.forEach((ele) => {
      if (aSet.has(ele)) return true;
    });
    return false;
  }
}

function dfs(graph, visited, element, aSet) {
  if (visited[element] == undefined) visited[element] = true;
  else return;
  aSet.add(element);
  let n = graph[element];
  if (!n) return;
  if (n && n.length <= 0) return;
  n.forEach((ele) => dfs(graph, visited, ele, aSet));
}
