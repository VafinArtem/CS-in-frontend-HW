export interface Queue<T> {
	get head(): T;
	enqueue(value: T): void;
	enqueueFirst(value: T): void;
	isEmpty(): boolean;
	dequeue(): T;
	dequeueLast(): T;
}
