import {isDigit} from "./is-digit";

describe('isDigit', () => {
	test(`должен определить арабские цифры`, () => {
		expect(isDigit(`123`)).toBe(true);
	});

	test(`должен определить римские цифры`, () => {
		expect(isDigit(`Ⅺ`)).toBe(true);
	});

	test(`должен определить дробные числа`, () => {
		expect(isDigit(`⅛`)).toBe(true);
	});

	test(`должен вернуть false для букв`, () => {
		expect(isDigit(`asd`)).toBe(false);
	});

	test(`должен вернуть false для различных групп чисел`, () => {
		expect(isDigit(`⅛Ⅺ`)).toBe(false);
	});
});

