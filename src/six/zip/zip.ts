function zip<T>(...iterablesObj: Array<Iterable<T> | string>): IterableIterator<unknown> {
	const iterators: Iterator<T>[] | IterableIterator<string>[] = [];

	// Записываем итераторы в отдельный массив
	iterablesObj.forEach((object, index) => {
		iterators[index] = object[Symbol.iterator]();
	})

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const value: Array<T | string>[] = [];

			for (let i = 0; i < iterators.length; i++) {
				// Вызываем next итераторов в цикле
				const result = iterators[i].next();

				if (!result.done) {
					// записываем value каждого в массив с value
					value.push(result.value);
				} else {
					// Заканчиваем итерацию
					return {
						done: true,
						value: null
					};
				}
			}

			// Отдаем value после завершения цикла
			return {
				done: false,
				value
			};
		}
	}
}

export {zip};


