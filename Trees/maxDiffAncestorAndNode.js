// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
function helper(root, maxDiff) {
  if (!root) return null;
  //get max and min from right
  let rightR = helper(root.right, maxDiff);
  //get max and min from left
  let leftR = helper(root.left, maxDiff);

  let arr;
  if (leftR && rightR) {
    arr = [...leftR, ...rightR]; // all the values from left and right
  } else if (!leftR && !rightR) {
    //if both not present
    //root will be the max and min and maxDiff would be only 0
    maxDiff.ans = Math.max(0, maxDiff.ans);
    return [root.val, root.val]; // return [only root's value ]
  } else if (!leftR) {
    arr = [...rightR]; // if left not present take only right values
  } else if (!rightR) {
    arr = [...leftR]; // if right not present
  }
  max = Math.max(...arr, root.val); // take max from the arr and the root
  min = Math.min(...arr, root.val); // min from the arr
  //  update maxDiff ans if it is maximum
  maxDiff.ans = Math.max(
    Math.abs(max - root.val),
    Math.abs(min - root.val),
    maxDiff.ans
  );
  return [min, max];
}

var maxAncestorDiff = function (root) {
  let maxDiff = { ans: -1 };
  helper(root, maxDiff);
  return maxDiff.ans;
};
