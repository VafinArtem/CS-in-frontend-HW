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

// Очередь
// enqueue - помещает в конец очереди
// dequeue - берет элемент из начала очереди

// queue.enqueue(10);
// queue.enqueue(11);
// queue.enqueue(12);
//
// console.log(queue.head); // 10
// console.log(queue.dequeue()) // 10
// console.log(queue.head); // 11
//
// console.log(queue.dequeue()); // 11
// console.log(queue.dequeue()); // 12
// console.log(queue.dequeue()); // Exception

const dequeue = new Queue();

// Двусторонняя очередь
// enqueue - помещает в конец очереди, этот элемент будет взят из очереди следующим при вызове метода dequeueLast
// enqueueFirst - помещает в начало очереди, этот элемент будет взят из очереди следующим при вызове метода dequeue

dequeue.enqueue(10);
dequeue.enqueueFirst(11);
dequeue.enqueue(12);

console.log(dequeue.dequeueLast()); // 12
console.log(dequeue.dequeue()); // 11
console.log(dequeue.dequeueLast()); // 10
console.log(dequeue.dequeueLast()); // Exception
