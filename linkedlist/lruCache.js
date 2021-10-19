class Node {
  constructor(key, next, prev) {
    this.key = key;
    this.next = next || null;
    this.prev = prev || null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.current = 0;
  this.capacity = capacity;
  this.map = new Map();
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let ans = -1;
  if (this.map.has(key)) {
    let { node, value } = this.map.get(key);
    ans = value;
    if (this.head == this.tail || this.head === node) {
      return ans;
    } else if (this.tail == node) {
      this.updateTail(node);
      this.updateHead(node);
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.updateHead(node);
    }
  }
  return ans;
};
LRUCache.prototype.updateHead = function (node) {
  if (node === this.head) {
    return;
  }
  node.next = this.head;
  this.head.prev = node;
  node.prev = null;
  this.head = node;
};
LRUCache.prototype.updateTail = function (node) {
  if (node === this.tail || !node) {
    this.tail.next = null;
    // tail is getting nulled
    this.tail = this.tail.prev || this.head;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let { node, value: v } = this.map.get(key);
    this.map.set(key, { node, value });
    this.updateTail(node);
    this.updateHead(node);
    return;
  }
  let node = new Node(key);
  // the key has to be set
  this.map.set(key, { node, value });
  if (this.capacity > this.current) {
    this.current++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    this.updateHead(node);
  } else {
    const k = this.tail.key;
    this.map.delete(k);
    this.updateTail();
    this.updateHead(node);
  }
};

let lc = new LRUCache(1);
lc.put(2, 1);
console.log(lc.get(2));
lc.put(3, 2);
console.log(lc.get(2));
lc.put(4, 4);
console.log(lc.get(1));
console.log(lc.get(3));
console.log(lc.get(4));
// let lc = new LRUCache(2);
// lc.get(2);
// lc.put(2, 6);
// console.log(lc.get(1));
// lc.put(1, 5);
// lc.put(1, 2);
// console.log(lc.get(1));
// // lc.put(4, 4);
// console.log(lc.get(2));
// console.log(lc.get(3));
// console.log(lc.get(4));
