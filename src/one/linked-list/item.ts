import {ListItem} from "./interface";

export class Item<T> implements ListItem<T>{
	value: T;
	prevItem: ListItem<T>;
	nextItem: ListItem<T>;

	constructor(value: T) {
		this.value = value;
	}

	set prev(item: ListItem<T>) {
		this.prevItem = item;
	}

	set next(item: ListItem<T>) {
		this.nextItem = item;
	}

	get prev() {
		return this.prevItem;
	}

	get next() {
		return this.nextItem;
	}
}
