/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var middleNode = function (head) {
  if (!head) return null;
  let slow;
  let fast = (slow = head);

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (!fast.next) {
    return slow;
  } else return slow.next;
};

function reverseList(head, prev, ans) {
  if (head == null) {
    return (ans.head = prev);
  }
  reverseList(head.next, head, ans);
  head.next = prev;
}

var isPalindrome = function (head) {
  if (!head || !head.next) return head;
  let mid = middleNode(head);
  let node = { head: null };
  reverseList(mid, null, node);
  let h = node.head;
  while (h) {
    if (h.val != head.val) {
      return false;
    }
    h = h.next;
    head = head.next;
  }
  return true;
};
