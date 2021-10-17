// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root == p || root == q) {
    return root;
  }

  let l1 = lca(root.left, p, q);
  let l2 = lca(root.right, p, q);

  if (l1 && l2) {
    return root;
  }
  if (!l1) {
    return l2;
  } else {
    return l1;
  }
};
var lca = lowestCommonAncestor;
