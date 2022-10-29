import {random} from "../random/random";
import {take} from "./take";

describe('take', () => {
	test(`ожидает получить массив значений определенной длины, где каждое значение удовлетворяет минимальному и максимальному значению`, () => {
		const randomInt = random(0, 10);
		const result = [...take(randomInt, 15)];

		for (const value of result) {
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThanOrEqual(10);
		}
		expect(result).toHaveLength(15);

	});
});
