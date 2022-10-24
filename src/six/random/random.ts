function getRandomNumber(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

const random = (min: number, max: number) => {
	return {
		[Symbol.iterator](): IterableIterator<number> {
			return this;
		},

		next: () => {
			return {
				value: Math.floor(getRandomNumber(min, max)),
				done: false
			}
		}
	}
}

export {random};
