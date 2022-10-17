# Важнейшие структуры данных

## 1. Динамический расширяемый массив на основе связанного списка (список массивов)

Вызов класса ***DynamicArray***, при вызове передать емкость массива

**Методы:**

- **add** - помещает элемент в первый свободный индекс массива
- **get** - получает значение по переданному индексу

**Гетеры:**

- **length** - получение текущей длины массива

**Пример:**

```js
const dynamicArray = new DynamicArray(3);

dynamicArray.add(1);
dynamicArray.add(2);
dynamicArray.add(3);
dynamicArray.add(4);
dynamicArray.add(5);
dynamicArray.add(6);
dynamicArray.add(7);
dynamicArray.add(8);

console.log(dynamicArray.length);  // 8

console.log(dynamicArray.get(0));  // 1
console.log(dynamicArray.get(1));  // 2
console.log(dynamicArray.get(4));  // 5
console.log(dynamicArray.get(7));  // 8
console.log(dynamicArray.get(9));  // undefined

for (const value of dynamicArray) {
	console.log(value); // 1,2,3,4,5,6,7,8
}
```

## 2. Динамический расширяемый массив как вектор

Вызов класса ***Vector***, при вызове передать емкость массива

**Методы:**

- **push** - помещает элемент в первый свободный индекс массива
- **pop** - удаляет последний элемент массива и возвращает его
- **get** - получает значение по переданному индексу

**Гетеры:**

- **length** - получение текущей длины массива

**Пример:**

```js
const vector = new Vector(3);

vector.push(1);
vector.push(2);
vector.push(3);
vector.push(4);

for (const element of vector) {
	console.log(element); // 1, 2, 3, 4, undefined, undefined
}

console.log(vector.length); // 4

console.log(vector.get(0)); // 1
console.log(vector.get(1)); // 2

console.log(vector.pop()); // 4
console.log(vector.pop()); // 3
console.log(vector.pop()); // 2
console.log(vector.pop()); // 1
console.log(vector.pop()); // undefined
```

## 3. Хеш-таблица

## 4. Бинарный поиск в массиве

Вызов функции ***binarySearch***, при вызове передать искомое значение и отсортированный массив.
Возвращает найденный индекс элемента, если элемент не найден то "Value not found".

**Пример:**

```js
console.log(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])) // 8
console.log(binarySearch(123, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])) // Value not found;
```
