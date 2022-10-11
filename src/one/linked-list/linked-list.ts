import {LinkedList as ListInterface, ListItem} from "./interface";
import {Item} from "./item";

export class LinkedList<T> implements ListInterface<T>{
	#first: Nullable<ListItem<T>> = null;
	#last: Nullable<ListItem<T>> = null;
	length = 0;

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

	// вставляет элемент #last
	add(value: T) {
		const item: ListItem<T> =  new Item(value);
		this.length++;


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

	// вставляет элемент #first
	insertBefore(value: T) {
		const item: ListItem<T> =  new Item(value);

		if (this.isEmpty()) {
			this.#first = item;
			this.length++;
			return;
		}

		if (this.length === 1) {
			this.#last = this.#first;
			this.#first = item;
			this.#first.next = this.#last;
			this.#last.prev = this.#first;
			this.length++;
			return;
		}

		if (this.length > 1) {
			item.next = this.#first;
			this.#first.prev = item;
			this.#first = item;
			this.length++;
		}
	}

	// вставляет элемент #last
	insertAfter(value: T) {
		this.add(value);
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

		if (!foundItem.next && !foundItem.prev) {
			this.#resetList();
			return;
		}

		this.length--;

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

	isEmpty(): boolean {
		return !this.length;
	}

	#resetList() {
		this.#first = null;
		this.#last = null;
		this.length = 0;
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
