function mapSeq<T>(iterableObj: Iterable<T>, functions: Iterable<Function>): IterableIterator<T> {
	const iterator = iterableObj[Symbol.iterator]();

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const result = iterator.next();

			if (!result.done) {
				let value: T = result.value;

				for (const func of functions) {
					value = func(value);
				}

				return { value, done: false };
			}

			return {
				done: true,
				value: null,
			}
		}
	}
}

export {mapSeq};
