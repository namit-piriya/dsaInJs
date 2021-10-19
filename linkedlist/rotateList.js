// https://leetcode.com/problems/rotate-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function (head, k) {
  let n = head;
  let l = k;
  if (!head) return head;
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  k = k % length;
  if (k == 0) return head;
  curr = head;
  for (let i = 1; i <= k; ++i) {
    curr = curr.next;
  }
  let start = head;
  while (curr.next != null) {
    curr = curr.next;
    start = start.next;
  }
  let tail = start.next;
  let ans = tail;
  start.next = null;
  while (tail.next) tail = tail.next;
  tail.next = head;
  return ans;
};
