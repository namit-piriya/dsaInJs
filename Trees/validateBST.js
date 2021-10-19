// https://leetcode.com/problems/validate-binary-search-tree/
function helper(root, l, r) {
  if (!root) return true; // if the root is null it is a bst
  return (
    root.val < r && // val must be lesser than r
    root.val > l && // val must be greater than l
    helper(root.right, root.val, r) && // now the left child must be in the range current node val and right
    helper(root.left, l, root.val)
  ); // now the rihgt child must be in the range left current node and left
}

var isValidBST = function (root) {
  return helper(root, -Number.MAX_VALUE, Number.MAX_VALUE); // give the range l and r to the current node
};
