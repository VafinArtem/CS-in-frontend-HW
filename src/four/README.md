# Строки. Кодовые таблицы и кодировки. Графемы. Нормальные формы

## 1. Функция определяющая является ли заданная строка числом или нет.

Вызов функции ***IsDigit***, при вызове передать строку, в ответ получаем булево значение

**Пример:**

```js
console.log(isDigit('123a')); // false
console.log(isDigit('123')); // true
console.log(isDigit('Ⅺ')); // true
console.log(isDigit('ↁ')); // false
console.log(isDigit('⅛')); // true
console.log(isDigit('ↅ')); // false
console.log(isDigit('ↅ123Ⅺ')); // false
```
