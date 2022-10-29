function zip<T>(...iterablesObj: Array<Iterable<T> | string>) {
	const length = iterablesObj.length;
	let index: number = 0;
	let indexIter: number = 0;
	let cursor: Iterator<T> | IterableIterator<string>;
	let value: Array<T | string>[] = [];


	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			if (indexIter > length - 1) {
				return {
					done: true,
					value,
				}
			}

			if (!cursor) {
				cursor = iterablesObj[indexIter][Symbol.iterator]();
			}

			const result = cursor.next();

			if (!result.done) {
				if (!value[index]) {
					value[index] = [];
				}

				value[index].push(result.value);

				index++;

				return this.next();
			} else {
				cursor = null;
				index = 0;

				if (indexIter === length - 1) {
					indexIter++;

					return {
						done: false,
						value,
					}
				}

				indexIter++;

				return this.next();
			}
		}

	}
}

export {zip};


