import {Queue as QueueInterface} from "./interface";
import {LinkedList} from "../linked-list/linked-list";

export class Queue<T> implements QueueInterface<T> {
	#queue: LinkedList<T>;

	// Возвращает элемент, который вернется с помощью метода dequeue()
	get head(): T {
		return this.#queue.first.value;
	}

	constructor() {
		this.#queue = new LinkedList<T>();
	}


	isEmpty() {
		return this.#queue.isEmpty();
	}

	// Помещает элемент в конец #last
	enqueue(value: T) {
		this.#queue.add(value)
	}

	// Помещает элемент в начало #first
	enqueueFirst(value: T) {
		this.#queue.insertBefore(value);
	}

	// Удаляет элемент с начала и возвращает его значение #first
	dequeue(): T {
		if (this.isEmpty()) {
			throw `The queue is empty`;
		}

		const firstItem = this.#queue.first.value;
		this.#queue.remove(firstItem);
		return firstItem;
	}

	// Удаляет элемент с конца и возвращает его значение #last
	dequeueLast(): T {
		if (this.isEmpty()) {
			throw `The queue is empty`;
		}

		const lastItem = this.#queue.last ? this.#queue.last.value : this.#queue.first.value
		this.#queue.remove(lastItem);
		return lastItem;
	}
}
