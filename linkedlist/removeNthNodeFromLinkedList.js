// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let ans = head;
  let curr = head;
  let count = 1;
  if (!head.next) return null;
  while (count <= n) {
    curr = curr.next;
    count++;
  }
  if (!curr) return ans.next;
  let prev = null;
  while (curr) {
    prev = head;
    head = head.next;
    curr = curr.next;
  }
  let next = prev.next.next;
  prev.next.next = null;
  prev.next = next;
  return ans;
};

a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
traverse(a);

removeNthFromEnd(a, 2);

traverse(a);

function traverse(head) {
  let str = " ";
  while (head) {
    str += head.val + " ";
    head = head.next;
  }
  console.log(str);
}
