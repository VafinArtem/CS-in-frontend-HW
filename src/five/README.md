# Поиск в строке. Регулярные выражения.

## 1. Функция на основе регулярного выражения, что если в если в строке есть символы отличные от латинских, цифр, подчеркивания и знака $, будет выдавать false.

Вызов функции ***isLatinNumericOrDollar***, при вызове передать строку, в ответ получаем булево значение

**Пример:**

```js
console.log(isLatinNumericOrDollar(`asd_$`)); // true
console.log(isLatinNumericOrDollar(`asd_$ 123`)); // false
```

## 2. Функция создающая массив на основе строки, где разделителем будут символы . , ; или пробелы.

Вызов функции ***arrayFromStringWithSeparators***

**Пример:**

```js
console.log(arrayFromStringWithSeparators(`foo    bla.bar,gd;4`)); // ['foo', 'bla', 'bar', 'gd', '4'];
```

## 3. Функция, принимающая строковый шаблон и объект параметров, и возвращает результат применения данных к этому шаблону.

Вызов функции ***createStringFromTemplate***

**Пример:**

```js
console.log(createStringFromTemplate('Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10})); // Hello, Bob! Your age is 10.
```

## 4. Функция, на основе регулярного выражения, удаляющая из строки любые дублирования подстрок из одного, двух или трёх символов, которые идут подряд.

Вызов функции ***deleteRepeat***

**Пример:**

```js
console.log(deleteRepeat(`aaaabbbbczzzz`)); // 'abcz'
console.log(deleteRepeat(`abababbbabcabc`)); // 'abbabc'
console.log(deleteRepeat(`foofoobabaaaazze`)); // 'foobaaze'
```

## 5. Функция, которая находит арифметические операций в строке и замененяет на результат

Вызов функции ***calc***

**Пример:**
```js
console.log(calc(`
Какой-то текст (10 + 15 - 24) ** 2
Еще какой то текст 2 * 10
`));

// результат:
// Какой-то текст 1
// Еще какой то текст 20
```
