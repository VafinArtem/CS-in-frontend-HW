import {LinkedList as ListInterface, ListItem} from "./interface";

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
		const item: ListItem<T> = {
			value,
		}

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
}

