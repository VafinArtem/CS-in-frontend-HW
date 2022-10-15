# Фундаментальные структуры данных

## 1. Итерируемый двусторонний двусвязанный связанный список

Вызов класса ***LinkedList***

**Методы:**

- **add** - вставка элемента в конец
- **insertBefore** - вставка элемента в начало
- **insertAfter** - вставка элемента в конец (аналог **add**)
- **remove** - удаление определенного элемента по значению
- **find** - поиск элемента по значению
- **isEmpty** - проверка, является ли список пустым

**Гетеры:**

- **first** - получение первого элемента списка
- **last** - получение последнего элемента списка

**Пример:**

```js
const linkedList = new LinkedList();

linkedList.add(`1`);
linkedList.add(`2`);
linkedList.add(`3`);
linkedList.add(`4`);
linkedList.add(`5`);

console.log(linkedList.first.next.next.value); // 3
console.log(linkedList.last.prev.prev.value); // 3

for (const value of linkedList) {
	console.log(value); 
}
// 1,2,3,4,5
```

## 2. Очередь на основе связанного списка и двусторонняя очередь

Вызов класса ***Queue***

**Методы:**

- **enqueue** - помещает в конец очереди
- **enqueueFirst** - помещает в начало очереди
- **dequeue** - удаляет элемент из начала очереди и возвращает его
- **dequeueLast** - удаляет элемент с конца очереди и возвращает его
- **isEmpty** - проверка, является ли очередь пустой

**Гетеры**

- **head** - возвращает элемент из начала очереди

**Пример очереди**

```js

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);

console.log(queue.head); // 10
console.log(queue.dequeue()) // 10
console.log(queue.head); // 11

console.log(queue.dequeue()); // 11
console.log(queue.dequeue()); // 12
console.log(queue.dequeue()); // Exception
```

**Пример двусторонней очереди**

```js
const dequeue = new Queue();

dequeue.enqueue(10);
dequeue.enqueueFirst(11);
dequeue.enqueue(12);

console.log(dequeue.dequeueLast()); // 12
console.log(dequeue.dequeue()); // 11
console.log(dequeue.dequeueLast()); // 10
console.log(dequeue.dequeueLast()); // Exception
```

## 3. Стек на основе массива фиксированной длины

Вызов класса ***Stack***, при вызове передать длину

**Методы:**

- **push** - помещает элемент в первый свободный индекс массива
- **pop** - удаляет последний помещенный элемент из массива и возвращает его

**Гетеры**

- **head** - возвращает последний помещенный элемент

**Пример**

```js
const stack = new Stack(3);

stack.push(10);
stack.push(11);
stack.push(12);
// stack.push(13); // Exception overflow

console.log(stack.head);  // 12
console.log(stack.pop()); // 12
console.log(stack.head);  // 11
console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
```

## 4. Структура на основе массива

Вызов класса ***Structure***, при вызове передать массив ключей

**Методы:**

- **set** - устанавливает переданному ключу переданное значение
- **get** - возвращает значение по переданному ключу

**Пример**

```js
const structure = new Structure(['name', 'lastName', 'age']);

structure.set('name', 'Jack');
structure.set('lastName', 'Black');
structure.set('age', 53);

console.log(structure.get('age')); // 'Jack'
```
