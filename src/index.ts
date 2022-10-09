import {LinkedList} from "./one/linked-list/linked-list";

const linkedList = new LinkedList();

linkedList.add(`1`);
linkedList.add(`2`);
linkedList.add(`3`);
linkedList.add(`4`);
linkedList.add(`5`);

console.log(linkedList.first.next.next.value);
console.log(linkedList.last.prev.prev.value);

for (const value of linkedList) {
	console.log(value);
}
