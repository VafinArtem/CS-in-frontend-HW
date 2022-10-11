export interface Queue<T> {
	enqueue(value: T): void;
	get head(): T;
	dequeue(): T;
}
