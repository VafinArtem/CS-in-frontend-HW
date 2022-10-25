function enumerate<T> (iterableObj: Iterable<T>): IterableIterator<T[]> {
	let index = 1;
	const iterator = iterableObj[Symbol.iterator]();

	return {
		[Symbol.iterator]() {
			return this;
		},

		next: () => {
			const value = iterator.next();

			if (!value.done) {
				return {
					value: [index++, value.value],
					done: false,
				}
			}

			return {
				value: null,
				done: true,
			}
		}
	}
}

export {enumerate}
