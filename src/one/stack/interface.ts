
export interface Stack<T> {
	push(value: T): void;
	pop(): T;
	get head(): T;
}
