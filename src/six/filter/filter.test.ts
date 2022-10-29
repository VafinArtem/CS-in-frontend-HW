import {take} from "../take/take";
import {random} from "../random/random";
import {filter} from "./filter";

describe('filter', () => {
	test(`вернет массив заданной длины, где каждый элемент выполняет условие переданной функции-предикат`, () => {
		const randomInt = random(0, 10);
		const result = [...take(filter(randomInt, (el: number) => el > 5), 10)];
		expect(result).toHaveLength(10);
		expect(result.every((el) => el > 5)).toBeTruthy();
	});
});
