function seq<T>(...iterablesObj: Array<Iterable<T> | string>): IterableIterator<T | string> {
	let index: number = 0;
	let cursor: Iterator<T> | IterableIterator<string>;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			if (index >= iterablesObj.length) {
				return {
					done: true,
					value: null,
				}
			}

			if (!cursor) {
				cursor = iterablesObj[index][Symbol.iterator]();
			}

			let value = cursor.next();

			if (!value.done) {
				return value;
			} else {
				index++;
				cursor = null;
				return this.next();
			}
		}
	}
}

export {seq};
