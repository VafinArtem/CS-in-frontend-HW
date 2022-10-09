export interface LinkedList<T> {
	add(value: T): void;
	get first(): ListItem<T>;
	get last(): ListItem<T>;
	[Symbol.iterator](): IterableIterator<T>;
}

export interface ListItem<T> {
	value: T;
	nextItem?: ListItem<T>;
	prevItem?: ListItem<T>;
	set next(value: ListItem<T>);
	set prev(value: ListItem<T>);
	get next(): ListItem<T>;
	get prev(): ListItem<T>;
}
