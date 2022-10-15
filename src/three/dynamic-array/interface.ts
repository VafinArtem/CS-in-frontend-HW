import {ListItem} from "../../one/linked-list/interface";

export interface DynamicArray<T> {
	add(value: T): void;
	get(index: number): T;
	findArrayInListItems(index: number): T[];
	get length(): number;
}
