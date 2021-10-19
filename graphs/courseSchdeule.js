// https://leetcode.com/problems/course-schedule/
var canFinish = function (numCourses, pre) {
  let graph = new Array(numCourses);
  let inDeg = new Array(numCourses).fill(0);

  pre.forEach(([to, from]) => {
    if (Array.isArray(graph[from])) graph[from].push(to);
    else graph[from] = [to];
    inDeg[to]++;
  });
  let zs = [];
  let res = [];
  let e = inDeg.indexOf(0);
  zs.push(e);
  while (e.length > 0) {
    e = zs.pop();
    res.push(e);
    graph[e].forEach((to) => {
      inDeg[to]--;
      indDeg[to] === 0 ? zs.push(to) : "";
    });
  }
  console.log(res);
  return res.length == numCourses;
};

canFinish(2, [[1, 0]]);
