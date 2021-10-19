// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

var connect = function (root) {
  let q = [];
  if (!root) return null;
  if (root) q.push(root);

  while (q.length > 0) {
    let s = q.length;
    for (let i = 0; i < s - 1; ++i) {
      let n = q.shift();
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
      n.next = q[0];
    }
    let n = q.shift();
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right);
  }
  return root;
};
