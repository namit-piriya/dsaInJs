function solve(pre, inO) {
  if (!pre || pre.length === 0 || !inO || inO.length === 0) {
    return null;
  }
  let root = new Tree(pre[0]);
  let rootIn = pre.indexOf(pre[0]);
  let nInL = inO.slice(0, rootIn);
  let nPreL = pre.slice(1, 1 + rootIn);
  let nPreR = pre.slice(1 + rootIn);
  let nInR = pre.slice(rootIn + 1);
  root.left = this.solve(nPreL, nInL);
  root.left = this.solve(nPreR, nInR);
  return root;
}
