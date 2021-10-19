// https://leetcode.com/problems/middle-of-the-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
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
