export type Key = string | number

export type KeyMapMethod = (key: Key) => number;

export interface Structure<T> {
	set(key: Key, value: T): void;
	get(key: Key): T;
}
