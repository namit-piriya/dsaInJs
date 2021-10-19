// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let l1 = getLength(headA);
  let l2 = getLength(headB);
  let diff = Math.abs(l1 - l2);
  if (l1 > l2) {
    while (diff-- != 0) {
      headA = headA.next;
    }
  } else {
    while (diff-- != 0) {
      headB = headB.next;
    }
  }
  while (headA != headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headB;
};

function getLength(head) {
  let ans = 0;
  curr = head;
  while (curr) {
    curr = curr.next;
    ans++;
  }
  return ans;
}
