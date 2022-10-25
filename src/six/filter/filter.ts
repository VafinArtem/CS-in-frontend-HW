function filter<T>(iterableObj: Iterable<T>, callback: Function): IterableIterator<T> {
	const iterator = iterableObj[Symbol.iterator]();

	return {
		[Symbol.iterator]() {
			return this;
		},

		next: () => {
			let current = iterator.next();

			while (!callback(current.value) && !current.done) {
				current = iterator.next();
			}

			return current;
		}
	}
}

export {filter}
