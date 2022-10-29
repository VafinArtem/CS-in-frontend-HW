import {stringIterator} from "./string-iterator";

describe('stringIterator', () => {
	test(`должен вернуть массив из двух эмоджи`, () => {
		expect([...stringIterator('😀🧓')]).toEqual(['😀', '🧓']);
	});

	test(`должен вернуть массив из различного набора символов`, () => {
		expect([...stringIterator('wd😀2🧓🧓1🇦🇩Ⅺ')]).toEqual(['w','d','😀','2','🧓','🧓','1','🇦','🇩','Ⅺ']);
	});
});

