import {Key, KeyMapMethod, Structure as StructureInterface} from "./interface";

export class Structure<T> implements StructureInterface<T> {
	#values: T[];
	#getIndex: KeyMapMethod;

	constructor(keys: Key[]) {
		if (!Array.isArray(keys) || !keys.length) {
			throw `Key array cannot be empty`;
		}
		this.#values = new Array(keys.length);
		const methodBody = this.#generateGetIndexMethod(keys);
		this.#getIndex = <KeyMapMethod>new Function(`key`, methodBody);
	}

	#generateGetIndexMethod(keys: Key[]) {
		const cases = keys.map((key, index) => `case "${key}": return ${index};`).join(`\n`);

		const body = `{
				switch(key) {
					${cases}
			    default: 
			    	throw "Key not found";
				}		
			}`;

		return body;
	}

	set(key: Key, value: T) {
		const keyIndex = this.#getIndex(key);
		this.#values[keyIndex] = value;
	}

	get(key: Key): T {
		const keyIndex = this.#getIndex(key);
		return this.#values[keyIndex];
	}
}
