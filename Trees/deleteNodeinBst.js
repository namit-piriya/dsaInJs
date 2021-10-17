// https://leetcode.com/problems/delete-node-in-a-bst

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

function inorderPre(root) {
  let temp = root.right;
  // inorderPredecessor will be the left most node of the right child
  // inorder predecessor is the value which comes after the node in the inorder traversal (which is sorted order in bst)
  while (temp.left != null) {
    temp = temp.left;
  }
  return temp;
}

var deleteNode = function (root, key) {
  if (!root) return root;
  if (key > root.val) {
    // if key is greater than root go right
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    // if key is lesser than root go left
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    // key is equal to root
    if (root.left && root.right) {
      let pre = inorderPre(root);
      root.val = pre.val; // assign predecessor value to the root
      pre.val = key; // and key to the predecessor
      root.right = deleteNode(root.right, key); // delete the node with the current key
      //since this will be the leaf node we will not fall in this condition again
      return root;
    }
    // it is leaf node return null, the node will be claimed by garbage collection
    if (!root.left && !root.right) {
      return null;
    }
    // if no left node  than we can return right node directly
    // the root node will be claimed by garbage collection
    if (!root.left) return root.right;
    if (!root.right) return root.left;
  }
};
