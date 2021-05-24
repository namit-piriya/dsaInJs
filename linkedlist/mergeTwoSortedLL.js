// https://leetcode.com/problems/merge-two-sorted-lists/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(1000); // create a dummy node
  let d = dummy;
  while (l1 && l2) {
    // when both of the lists have elements
    if (l1.val < l2.val) {
      // first val is less than second
      d.next = l1; // point next to the lesser value
      l1 = l1.next; // move to the next node
      d = d.next; // move the dummy node
    } else {
      d.next = l2;
      l2 = l2.next;
      d = d.next;
    }
  }
  while (!l1) {
    d.next = l1;
    l1 = l1.next;
    d = d.next;
  }
  while (!l2) {
    d.next = l2;
    l2 = l2.next;
    d = d.next;
  }
  return dummy.next; // return next of dummy node
};
