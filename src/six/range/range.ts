type RangeType = string | number;

class Range {
	#min: number;
	#max: number;
	#symbolType: `string` | `number`;

	constructor(min: RangeType, max: RangeType) {
		this.#symbolType = typeof min === `string` ? `string` : `number`;
		this.#min = typeof min === `string` ? min.codePointAt(0) : min;
		this.#max = typeof max === `string` ? max.codePointAt(0) : max;
	}

	[Symbol.iterator]() {
		return this.values();
	}

	values() {
		let currentValue = this.#min;

		return {
			[Symbol.iterator]() {
				return this;
			},

			next: () => {
				return {
					done: currentValue > this.#max,
					value: this.#symbolType === `string` ? String.fromCharCode(currentValue++) : currentValue++,
				}
			}
		}
	}

	revers() {
		let currentValue = this.#max;

		return {
			[Symbol.iterator]() {
				return this;
			},

			next: () => {
				return {
					done: currentValue < this.#min,
					value: this.#symbolType === `string` ? String.fromCharCode(currentValue--) : currentValue--,
				}
			}
		}
	}
}

export {Range};
