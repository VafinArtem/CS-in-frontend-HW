import {Queue as QueueInterface} from "./interface";
import {LinkedList} from "../linked-list/linked-list";

export class Queue<T> implements QueueInterface<T> {
	#queue;

	get head(): T {
		return this.#queue.first.value;
	}

	constructor() {
		this.#queue = new LinkedList<T>();
	}

	push(value: T) {
		this.#queue.add(value)
	}

	shift(): T {
		if (!this.#queue.first) {
			throw `The queue is empty`;
		}

		const firstItem = this.#queue.first.value;
		this.#queue.remove(firstItem);
		return firstItem;
	}
}
