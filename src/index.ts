import {LinkedList} from "./one/linked-list/linked-list";
import {Queue} from "./one/queue/queue";

const linkedList = new LinkedList();

// linkedList.add(`1`);
// linkedList.add(`2`);
// linkedList.add(`3`);
// linkedList.add(`4`);
// linkedList.add(`5`);
//
// console.log(linkedList.first.next.next.value);
// console.log(linkedList.last.prev.prev.value);
//
// for (const value of linkedList) {
// 	console.log(value);
// }

const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);
console.log(queue.shift())
console.log(queue.head);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
