import {arrayFromStringWithSeparators, calc, createStringFromTemplate, deleteRepeat, isLatinNumericOrDollar} from "./index";

describe('regular expression. isLatinNumericOrDollar function', () => {
	test(`должен определить что в строке только латиница, символ доллара и подчеркивание`, () => {
		expect(isLatinNumericOrDollar(`asd_$`)).toBe(true);
	});

	test(`должен вернуть false из-за пробела в строке`, () => {
		expect(isLatinNumericOrDollar(`asd _$`)).toBe(false);
	});
});

describe('regular expression. arrayFromStringWithSeparators function', () => {
	test(`должен вернуть массив строк`, () => {
		expect(arrayFromStringWithSeparators(`foo    bla.bar,gd;4`)).toEqual(['foo', 'bla', 'bar', 'gd', '4']);
	});
	test(`должен вернуть массив строк`, () => {
		expect(arrayFromStringWithSeparators(`bla.foo фы.5g,   bar,gd;4`)).toStrictEqual(['bla', 'foo', 'фы', '5g', 'bar', 'gd', '4']);
	});
});

describe('regular expression. createStringFromTemplate function', () => {
	test(`должен вернуть строку с заполненными данными из объекта`, () => {
		expect(createStringFromTemplate('Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10})).toEqual(`Hello, Bob! Your age is 10.`);
	});
});

describe('regular expression. deleteRepeat function', () => {
	test(`должен вернуть строку с удаленными повторениями`, () => {
		expect(deleteRepeat(`aaaabbbbczzzz`)).toEqual(`abcz`);
		expect(deleteRepeat(`abababbbabcabc`)).toEqual(`abbabc`);
		expect(deleteRepeat(`foofoobabaaaazze`)).toEqual(`foobaaze`);
	});
});

describe('regular expression. calc function', () => {
	test(`должен вернуть строку с вычисленными значениями из переданной строки`, () => {
		const res = calc(`
    Какой-то текст (10 + 15 - 24) ** 2
    Еще какой то текст 2 * 10
    `)

		expect(/\s1\n/.test(res) && /\s20/.test(res));
	});
});
