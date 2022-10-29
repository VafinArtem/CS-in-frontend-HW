import {Range} from "./range";

describe('range', () => {
	test(`ожидает получить массив от 'a' до 'f'`, () => {
		const symbolRange = new Range('a', 'f');

		expect(Array.from(symbolRange)).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
	});

	test(`ожидает получить массив от 1 до -5`, () => {
		const numberRange = new Range(-5, 1);

		expect(Array.from(numberRange.revers())).toEqual([1, 0, -1, -2, -3, -4, -5])
	});
});
