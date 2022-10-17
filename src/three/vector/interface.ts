export interface Vector<T> {
	push(value: T): void;
	pop(): T;
	get(index: number): T;
	get length(): number;
	[Symbol.iterator](): Iterator<T>
}
