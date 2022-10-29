import {enumerate} from "./enumerate";
import {take} from "../take/take";
import {random} from "../random/random";

describe('enumerate', () => {
	test(`вернет массив массивов заданной длины, где каждый первый элемент номер итерации`, () => {
		const randomInt = random(0, 10);
		const result = [...take(enumerate(randomInt), 5)];
		expect(result).toHaveLength(5);
		expect(result.map(([i]) => i)).toEqual([1, 2, 3, 4, 5]);
	});
});
