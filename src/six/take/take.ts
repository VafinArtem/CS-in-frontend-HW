function take<T> (iterableObj: Iterable<T>, iteration: number): IterableIterator<T> {
	let index = 1;
	const iter = iterableObj[Symbol.iterator]();

	return {
		[Symbol.iterator]() {
			return this;
		},

		next: () => {
			if (index <= iteration) {
				index++;
				return iter.next()
			}

			return {
				value: iter,
				done: true,
			}
		}
	}
}

export {take};
