/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.size <= 0;
  }

  get size() {
    return this.queue.length;
  }

  get min() {
    this.swap(0, this.queue.length - 1);
    let min = this.queue.pop();
    this.minHeapifyD(0);
    return min;
  }

  swap(a, b) {
    let q = this.queue;
    let tema = q[a];
    q[a] = q[b];
    q[b] = tema;
  }

  left(parent) {
    let l = parent * 2 + 1;
    let lc = l < this.size ? this.queue[l] : null;
    l = lc ? l : -1;
    return { c: lc, ind: l };
  }

  right(parent) {
    let r = parent * 2 + 2;
    let rc = r < this.size ? this.queue[r] : null;
    r = rc ? r : -1;
    return { c: rc, ind: r };
  }

  parent(child) {
    return Number.parseInt((child - 1) / 2);
  }

  minHeapifyU(ind) {
    if (ind < 0) return;
    let p = this.parent(ind);
    if (this.comp(this.queue[p], this.queue[ind]) > 0) {
      this.swap(p, ind);
      this.minHeapifyU(p);
    }
  }

  minHeapifyD(ind) {
    let q = this.queue;
    let curr = q[ind];
    if (ind > q.length) return;
    let { c: rc, ind: r } = this.right(ind);
    let { c: lc, ind: l } = this.left(ind);
    let currMin = null;
    let currInd = null;
    if (lc && rc) {
      if (this.comp(lc, rc) < 0) {
        currMin = lc;
        currInd = l;
      } else {
        currMin = rc;
        currInd = r;
      }
    } else if (lc) {
      currMin = lc;
      currInd = l;
    } else {
      currMin = rc;
      currInd = r;
    }
    if (currMin) {
      if (this.comp(curr, currMin) > 0) {
        this.swap(currInd, ind);
        this.minHeapifyD(currInd);
      }
    }
  }

  add(no) {
    this.queue.push(no);
    if (this.size > 1) this.minHeapifyU(this.size - 1);
  }
  get q() {
    return this.queue;
  }
  comp(a, b) {
    return a.val - b.val;
  }
}

var mergeKLists = function (lists) {
  const pq = new PriorityQueue();
  lists.forEach((node) => {
    while (node) {
      next = node.next;
      node.next = null;
      pq.add(node);
      node = next;
    }
  });
  let dummy = new ListNode(-1);
  let tail = dummy;
  while (!pq.isEmpty()) {
    let a = pq.min;
    tail.next = a;
    tail = tail.next;
  }
  return dummy.next;
};
