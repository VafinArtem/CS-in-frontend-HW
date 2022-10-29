import {mapSeq} from "./map-seq";

describe('mapSeq', () => {
	test(`ожидает получить на выходе вычисленные значения, переданные в итерируемом объекте и функциях`, () => {
		expect([...mapSeq([1, 2, 3], [(el: number) => el * 2, (el: number) => el - 1])]).toEqual([1, 3, 5]);
	});
});
