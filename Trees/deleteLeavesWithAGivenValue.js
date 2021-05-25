// https://leetcode.com/problems/delete-leaves-with-a-given-value/

var removeLeafNodes = function (root, target) {
  if (!root) return root;
  root.left = removeLeafNodes(root.left, target); // remove the left children's leaf nodes
  root.right = removeLeafNodes(root.right, target); // remove the right children's leaf nodes

  if (!root.left && !root.right && root.val == target) {
    return null;
  }
  //if the above condition is not true, nothing to delete
  return root;
};
