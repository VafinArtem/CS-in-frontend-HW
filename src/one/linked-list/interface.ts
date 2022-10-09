export interface LinkedList<T> {
	add(value: T): void;
	get first(): ListItem<T>;
	get last(): ListItem<T>;
	[Symbol.iterator](): IterableIterator<T>
}

export type ListItem<T> = {
	value: T;
	next?: ListItem<T>;
	prev?: ListItem<T>;
}
