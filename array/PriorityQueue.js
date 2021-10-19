class PriorityQueue {
  constructor() {
    this.queue = [];
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
    l = lc ? lc : -1;
    return { c: lc, ind: l };
  }

  right(parent) {
    let r = parent * 2 + 2;
    let rc = r < this.size ? this.queue[r] : null;
    r = rc ? rc : -1;
    return { c: rc, ind: r };
  }

  parent(child) {
    return Number.parseInt((child - 1) / 2);
  }

  minHeapifyU(ind) {
    if (ind < 0) return;
    let p = this.parent(ind);
    if (this.queue[p] > this.queue[ind]) {
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
    if (lc < curr || rc < curr) {
      if (lc < curr) {
        this.swap(curr, l);
        this.minHeapifyD(l);
      } else if (rc < curr) {
        this.addswap(curr, r);
        this.minHeapifyD(r);
      }
    }
  }

  add(no) {
    this.queue.push(no);
    this.minHeapifyU(this.size - 1);
  }
  get q() {
    return this.queue;
  }
}
module.exports = PriorityQueue;

let pq = new PriorityQueue();

pq.add(1);
pq.add(4);
pq.add(5);
pq.add(3);
pq.add(2);
pq.add(6);

console.log(pq.q);

pq.min;
