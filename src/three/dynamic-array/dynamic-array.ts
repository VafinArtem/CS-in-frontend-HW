import {LinkedList as LinkedListInterface, ListItem} from "../../one/linked-list/interface";
import {DynamicArray as DynamicArrayInterface} from "./interface";
import {LinkedList} from "../../one/linked-list/linked-list";

export class DynamicArray<T> implements DynamicArrayInterface<T> {
	#list: LinkedListInterface<T[]>;
	#capacity: number;
	#length: number = 0;

	constructor(capacity: number) {
		if (!capacity) {
			throw `Capacity must be a positive value`;
		}

		this.#list = new LinkedList();
		this.#list.add(new Array(capacity));
		this.#capacity = capacity;
	}

	add(value: T) {
		const index = this.#length % this.#capacity;

		if (!this.#list.last && this.length < this.#capacity) {

			this.#list.first.value[index] = value;
			this.#length++;
			return;
		}

		if (index === 0) {
			this.#list.add(new Array(this.#capacity));
		}

		this.#list.last.value[index] = value;
		this.#length++;
	}

	get(index: number): T {
		const currentIndex = index % this.#capacity;
		return this.findArrayInListItems(index) ? this.findArrayInListItems(index)[currentIndex] : undefined;
	}

	findArrayInListItems(index: number): T[] {
		// Находим максимальное число итераций
		const maxIteration = Math.floor(index / this.#capacity);

		let iteration = 0;
		for (const value of this.#list) {
			if (maxIteration === iteration) {
				return value;
			}
			iteration++;
		}
	}

	get length(): number {
		return this.#length;
	}
}
