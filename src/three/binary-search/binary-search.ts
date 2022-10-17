function binarySearch<T>(searchValue: T, array: T[]): number | string {
	let lowerBound = 0;
	let upperBound = array.length - 1;
	let currentPosition;

	while(true) {
		currentPosition = Math.floor((lowerBound + upperBound) / 2);

		if (array[currentPosition] === searchValue) {
			return currentPosition;
		}

		if (lowerBound > upperBound) {
			return `Value not found`;
		}

		if (array[currentPosition] < searchValue) {
			lowerBound = currentPosition + 1;
		} else {
			upperBound = currentPosition - 1;
		}
	}
}

export {binarySearch};
