export interface DynamicArray<T> {
	add(value: T): void;
	get(index: number): T;
	findArrayInListItems(index: number): T[];
	get length(): number;
	[Symbol.iterator](): IterableIterator<T>;
}
