const PQ = require("./PriorityQueue");

const p = new PQ();

p.add(5);
p.add(8);
p.add(3);
p.add(3);
p.add(2);
console.log(p.min);
console.log(p.q);
