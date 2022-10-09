export interface Queue<T> {
	push(value: T): void;
	get head(): T;
	shift(): T;
}
