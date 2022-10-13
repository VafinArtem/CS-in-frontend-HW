import {Stack as StackInterface} from "./interface";


export class Stack<T> implements StackInterface<T> {
	#array: Array<T>;
	#currentIndex: number = 0;
	#limit: number;

	constructor(length: number) {
		this.#array = new Array(length);
		this.#limit = length;
	}

	get head(): T {
		return this.#array[this.#currentIndex]
	}

	push(value: T) {
		if (this.#currentIndex === this.#limit) {
			throw new Error('Stack overflow');
		}

		this.#array[this.#currentIndex] = value;

		if (this.#currentIndex < this.#limit - 1) {
			this.#currentIndex++;
		}
	}

	pop() {
		if (this.#currentIndex - 1 < -1) {
			throw new Error(`Stack is empty`);
		}

		const returnedValue = this.#array[this.#currentIndex];
		this.#array[this.#currentIndex] = undefined;
		this.#currentIndex--;
		return returnedValue;
	}
}
