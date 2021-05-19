// https://leetcode.com/problems/delete-node-in-a-linked-list/submissions/

// copy the next node's value into current node and delete the next node
var deleteNode = function (node) {
  node.val = node.next.val; // copy the next node's value'
  node.next = node.next.next; // point next to the next of next
};
