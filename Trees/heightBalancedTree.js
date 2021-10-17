// https://leetcode.com/problems/balanced-binary-tree/submissions/
function helper(root) {
  if (!root) return 0; // if nothing is there return height as 0
  let lh = helper(root.left); // call for left
  let rh = helper(root.right); // call for right

  // check if left is balanced and right is balanced and
  //  also the difference between lh and right height is less than 1
  if (lh !== -1 && rh !== -1 && Math.abs(lh - rh) <= 1) {
    return Math.max(lh, rh) + 1;
    //  return the height including the node itself i.e + 1;
  }
  // if above conditions dont match return -1 i.e. tree is not balanced
  return -1;
}
var isBalanced = function (root) {
  if (!root) return true; // if no root present return true already balanced
  return helper(root) != -1; // if the helper didnt return -1 then it is balanced tree
};
