const LowSurrogate = {
	MIN: 55296,
	MAX: 56191
}

const HighSurrogate = {
	MIN: 56320,
	MAX: 57343
}

function stringIterator(string: string) {
	const normalizedString = string.normalize();

	let position = 0;
	let current = ``;
	let previous = ``;

	return {
		[Symbol.iterator]() {
			return this;
		},

		next: () => {
			current = normalizedString[position++];

			if (current === undefined) {
				return {
					done: true,
					value: current
				}
			}

			let code = current.charCodeAt(0);

			if (code >= LowSurrogate.MIN && code <= LowSurrogate.MAX) {
				previous = current;
				current = normalizedString[position++];

				return {
					done: false,
					value: `${previous}${current}`
				}
			}

			return {
				value: current,
				done: false,
			}
		}
	}
}

export {stringIterator};
