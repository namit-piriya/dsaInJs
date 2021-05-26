// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  if (!root) return root;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

/*
    first invert its childs and then
    invert root
*/
