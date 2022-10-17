import {Vector as VectorInterface} from "./interface";

export class Vector<T> implements VectorInterface<T> {
	#buffer: Array<T>;
	#capacity: number;
	#length: number = 0;

	constructor(capacity: number) {
		this.#capacity = capacity;
		this.#buffer = new Array<T>(this.#capacity)
	}

	#updateBuffer() {
		this.#capacity = this.#capacity * 2;
		const newBuffer: Array<T> = new Array(this.#capacity);

		let index = 0;

		while (index <= this.#length - 1) {
			newBuffer[index] = this.#buffer[index];
			index++;
		}

		this.#buffer = newBuffer;
	}

	push(value: T): void {
		if (this.#length === this.#capacity) {
			this.#updateBuffer();
		}

		this.#buffer[this.#length] = value;
		this.#length++;
	}

	pop(): T {
		const lastElement = this.#buffer[this.#length - 1];
		this.#buffer[this.#length - 1] = undefined;
		this.#length--;
		return lastElement;
	}

	get(index: number): T {
		return this.#buffer[index];
	}

	get length(): number {
		return this.#length;
	}

	* [Symbol.iterator](): Iterator<T> {
		for (let element of this.#buffer) {
			yield element;
		}
	}
}
