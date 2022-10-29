import {random} from "./random";

describe('random', () => {
	test(`ожидает получить рандомно сгенерированные числа от 0 до  10`, () => {
		const randomInt = random(0, 10);

		for (let i = 0; i < 50; i++) {
			const result = randomInt.next();
			expect(result.value).toBeGreaterThanOrEqual(0);
			expect(result.value).toBeLessThanOrEqual(10);
		}
	});
});
