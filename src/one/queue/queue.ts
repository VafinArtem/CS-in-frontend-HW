import {Queue as QueueInterface} from "./interface";
import {LinkedList} from "../linked-list/linked-list";

export class Queue<T> implements QueueInterface<T> {
	#queue;

	// Возвращает элемент, который вернется с помощью метода dequeue()
	get head(): T {
		return this.#queue.first.value;
	}

	constructor() {
		this.#queue = new LinkedList<T>();
	}

	// Помещает элемент в конец #last
	enqueue(value: T) {
		this.#queue.add(value)
	}

	// Удаляет элемент с начала и возвращает его значение #first
	dequeue(): T {
		if (!this.#queue.first) {
			throw `The queue is empty`;
		}

		const firstItem = this.#queue.first.value;
		this.#queue.remove(firstItem);
		return firstItem;
	}
}
