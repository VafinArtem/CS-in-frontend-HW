import {LinkedList} from "./one/linked-list/linked-list";
import {Queue} from "./one/queue/queue";
import {Stack} from "./one/stack/stack";
import {Structure} from "./one/structure/structure";
import {DynamicArray} from "./three/dynamic-array/dynamic-array";
import {Vector} from "./three/vector/vector";
import {isLatinNumericOrDollar, arrayFromStringWithSeparators, calc, createStringFromTemplate, deleteRepeat} from "./five";
import {random} from "./six/random/random";
import {take} from "./six/take/take";
import {filter} from "./six/filter/filter";
import {enumerate} from "./six/enumerate/enumerate";
import {Range} from "./six/range/range";
import {seq} from "./six/seq/seq";
import {zip} from "./six/zip/zip";
import {mapSeq} from "./six/map-seq/map-seq";

const linkedList = new LinkedList();

// linkedList.add(`1`);
// linkedList.add(`2`);
// linkedList.add(`3`);
// linkedList.add(`4`);
// linkedList.add(`5`);

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

// dequeue.enqueue(10);
// dequeue.enqueueFirst(11);
// dequeue.enqueue(12);
//
// console.log(dequeue.dequeueLast()); // 12
// console.log(dequeue.dequeue()); // 11
// console.log(dequeue.dequeueLast()); // 10
// console.log(dequeue.dequeueLast()); // Exception

const stack = new Stack(3);

// Стек на основе фиксированного массива
// push - помещает элемент в первую свободный индекс массива
// pop - удаляет последний помещенный элемент из массива и возвращает его
// head - возвращает последний помещенный элемент

// stack.push(10);
// stack.push(11);
// stack.push(12);
// // stack.push(13); // Exception overflow
//
// console.log(stack.head);  // 12
//
// console.log(stack.pop()); // 12
//
// console.log(stack.head);  // 11
//
// console.log(stack.pop()); // 11
// console.log(stack.pop()); // 10
// console.log(stack.pop()); // Exception

const structure = new Structure(['name', 'lastName', 'age']);

// Структура на основе массива

// structure.set('name', 'Jack');
// structure.set('lastName', 'Black');
// structure.set('age', 53);
//
// console.log(structure.get('age')); // 'Jack'

const dynamicArray = new DynamicArray(3);
//
// dynamicArray.add(1);
// dynamicArray.add(2);
// dynamicArray.add(3);
// dynamicArray.add(4);
// dynamicArray.add(5);
// dynamicArray.add(6);
// dynamicArray.add(7);
// dynamicArray.add(8);
//
// for (const value of dynamicArray) {
// 	console.log(value);
// }
//
// // console.log(dynamicArray.length);  // 8
// // console.log(dynamicArray.get(0));  // 1
// // console.log(dynamicArray.get(1));  // 2
// // console.log(dynamicArray.get(4));  // 5
// // console.log(dynamicArray.get(7));  // 8
// // console.log(dynamicArray.get(9));  // undefined

const vector = new Vector(3);

// vector.push(1);
// vector.push(2);
// vector.push(3);
// vector.push(4);
//
// for (const element of vector) {
// 	console.log(element); // 1, 2, 3, 4, undefined, undefined
// }
//
// console.log(vector.length); // 4
//
// console.log(vector.get(0)); // 1
// console.log(vector.get(1)); // 2
//
// console.log(vector.pop()); // 4
// console.log(vector.pop()); // 3
// console.log(vector.pop()); // 2
// console.log(vector.pop()); // 1
// console.log(vector.pop()); // undefined

// console.log(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])) // 8
// console.log(binarySearch(123, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])) // Value not found;

// console.log(isDigit('123a')); // false
// console.log(isDigit('123')); // true
// console.log(isDigit('Ⅺ')); // true
// console.log(isDigit('ↁ')); // false
// console.log(isDigit('⅛')); // true
// console.log(isDigit('ↅ')); // false
// console.log(isDigit('ↅ123Ⅺ')); // false

// console.log([...stringIterator('😀🧓')]);
// console.log([...stringIterator('wd😀2🧓🧓1🇦🇩Ⅺ')]);

// console.log(isLatinNumericOrDollar(`asd_$`)); // true
// console.log(isLatinNumericOrDollar(`asd_$ 123`)); // false

// console.log(arrayFromStringWithSeparators(`foo    bla.bar,gd;4`));

// console.log(createStringFromTemplate('Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10}));

// console.log(deleteRepeat(`aaaabbbbczzzz`)); // 'abcz'
// console.log(deleteRepeat(`abababbbabcabc`)); // 'abbabc'
// console.log(deleteRepeat(`foofoobabaaaazze`)); // 'foobaaze'

// console.log(calc(`
// Какой-то текст (10 + 15 - 24) ** 2
// Еще какой то текст 2 * 10
// `));

const randomInt = random(0, 10);

// console.log(randomInt.next()); // {value: 6, done: false}
// console.log(randomInt.next()); // {value: 7, done: false}
// console.log(randomInt.next()); // {value: 0, done: false}
// console.log(randomInt.next()); // {value: 7, done: false}

// console.log([...take(randomInt, 15)]); // [1, 0, 7, 0, 0, 6, 2, 7, 1, 5, 3, 6, 5, 1, 1]

// console.log([...take(filter(randomInt, (el: number) => el > 5), 10)]); // [7, 7, 8, 9, 7, 9, 9, 8, 9, 7]

// console.log([...take(enumerate(randomInt), 5)]); // [[1, 6], [2, 8], [3, 2], [4, 3], [5, 8]]

// const symbolRange = new Range('a', 'f');
//
// console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
//
// const numberRange = new Range(-5, 1);
//
// console.log(Array.from(numberRange.revers())); // [1, 0, -1, -2, -3, -4, -5]

// console.log([...seq(new Set([3, 4]), [1, 2], 'bla')]); // [3, 4, 1, 2, 'b', 'l', 'a']

// console.log(...zip(new Set([3, 4]), [1, 2], 'bl')); // [[3, 1, 'b'], [4, 2, 'l']]

// console.log([...mapSeq([1, 2, 3], [(el: number) => el * 2, (el: number) => el - 1])]); // [1 3 5]
