import {LinkedList as ListInterface, ListItem} from "./interface";
import {Item} from "./item";

export class LinkedList<T> implements ListInterface<T>{
	#first: Nullable<ListItem<T>> = null;
	#last: Nullable<ListItem<T>> = null;

	get first() {
		return this.#first;
	}

	get last() {
		return this.#last;
	}

	add(value: T) {
		const item: ListItem<T> =  new Item(value);

		if (!this.#first) {
			this.#first = item;
			return;
		}

		if (this.#first && !this.#last) {
			item.prev = this.#first;

			this.#last = item;
			this.#first.next = item;
			return;
		}

		if (this.#last) {
			this.#last.next = item;
			item.prev = this.#last;
			this.#last = item;
		}
	}

	public *values(): IterableIterator<T> {
		let current = this.#first;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	[Symbol.iterator](): IterableIterator<T> {
		return this.values();
	}
}
