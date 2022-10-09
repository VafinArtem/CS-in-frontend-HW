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

	get items(): Iterable<ListItem<T>> {
		let current = this.#first;
		return {
			* [Symbol.iterator](): Iterator<ListItem<T>> {
				while (current) {
					yield current;
					current = current.next
				}
			}
		}
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

	find(value: T): Nullable<ListItem<T>> {
		for (let item of this.items) {
			if (value === item.value) {
				return item;
			}
		}
		return null;
	}

	remove(value: T) {
		const foundItem: ListItem<T> = this.find(value);

		const prevItem = foundItem.prev;
		const nextItem = foundItem.next;

		if (prevItem) {
			if (nextItem) {
				prevItem.next = nextItem;
			} else {
				prevItem.next = null;
				this.#last = prevItem;
			}
		}

		if (nextItem) {
			if (prevItem) {
				nextItem.prev = prevItem;
			} else {
				nextItem.prev = null;
				this.#first = nextItem;
			}
		}
	}

	*values(): IterableIterator<T> {
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
