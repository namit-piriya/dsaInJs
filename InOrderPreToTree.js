class Tree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solve(pre, inO) {
  if (!pre || pre.length === 0 || !inO || inO.length === 0) {
    return null;
  }
  let root = new Tree(pre[0]);
  let rootIn = inO.indexOf(pre[0]);
  let nInL = inO.slice(0, rootIn);
  let nPreL = pre.slice(1, 1 + rootIn);
  let nPreR = pre.slice(1 + rootIn);
  let nInR = inO.slice(rootIn + 1);
  root.left = solve(nPreL, nInL);
  root.right = solve(nPreR, nInR);
  return root;
}

let t = solve([1, 0, 2], [1, 2, 0]); // takes preorder and inorder and makes a tree

function inOrder(root) {
  if (!root) return;
  inOrder(root.left);
  console.log(root.val + " ");
  inOrder(root.right);
}

inOrder(t);
