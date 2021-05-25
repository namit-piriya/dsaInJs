// iterative code
var reverseList = function (head) {
  let prev = null;
  curr = head;
  let next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

function rev(root, prev, ans) {
  if (!root) {
    return (ans.head = prev);
  }
  rev(root.next, root, ans);
  root.next = prev;
}

var reverseListRec = function (head) {
  if (!head) {
    return null;
  }
  let ans = { head: null };
  rev(head, null, ans);
  return ans.head;
};
