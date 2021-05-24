// https://leetcode.com/problems/validate-binary-search-tree/
function helper(root, l, r) {
  if (!root) return true;
  return (
    root.val < r &&
    root.val > l &&
    helper(root.right, root.val, r) &&
    helper(root.left, l, root.val)
  );
}

var isValidBST = function (root) {
  return helper(root, -Number.MAX_VALUE, Number.MAX_VALUE); // give the range l and r to the current node
};
