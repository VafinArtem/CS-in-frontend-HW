# Важнейшие структуры данных

## 1.  динамический расширяемый массив на основе связанного списка (список массивов)

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
```
