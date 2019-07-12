interface ILinkedList {
	append(element: any): boolean
	insert(position: number, element: any): boolean
	removeAt(position: number): LinkedListNode
	remove(element: any): LinkedListNode;
	indexOf(element: number): number;
	isEmpty(): boolean;
	size(): number
	getHead(): LinkedListNode
	toString(): string;
}

class LinkedList implements ILinkedList {
	private head: LinkedListNode;
	private length: number = 0;
	public constructor() {

	}
	public append(element: any): boolean {
		let node = new LinkedListNode(element), //{1}
			current: LinkedListNode; //{2}
		if (this.head === null) { //列表中第一个节点 //{3}
			this.head = node;
		} else {
			current = this.head; //{4}
			//循环列表，直到找到最后一项
			while (current.next) {
				current = current.next;
			}
			//找到最后一项，将其next赋为node，建立链接
			current.next = node; //{5}
		}
		this.length++; //更新列表的长度 //{6}
		return true;
	}

	public removeAt(position: number): LinkedListNode {
		//检查越界值
		if (position > -1 && position < this.length) { // {1}
			let current: LinkedListNode = this.head, // {2}
				previous: LinkedListNode, // {3}
				index: number = 0; // {4}
			//移除第一项
			if (position === 0) { // {5}
				this.head = current.next;
			} else {
				while (index++ < position) { // {6}
					previous = current; // {7}
					current = current.next; // {8}
				}
				//将previous与current的下一项链接起来：跳过current，从而移除它
				previous.next = current.next; // {9}
			}
			this.length--; // {10}
			return current.element;
		} else {
			return null; // {11}
		}
	}

	public insert(position: number, element: any): boolean {
		//检查越界值
		if (position >= 0 && position <= this.length) { //{1}
			let node: LinkedListNode = new LinkedListNode(element),
				current: LinkedListNode = this.head,
				previous: LinkedListNode,
				index: number = 0;
			if (position === 0) { //在第一个位置添加
				node.next = current; //{2}
				this.head = node;
			} else {
				while (index++ < position) { //{3}
					previous = current;
					current = current.next;
				}
				node.next = current; //{4}
				previous.next = node; //{5}
			}
			this.length++; //更新列表的长度
			return true;
		} else {
			return false; //{6}
		}
	}

	public toString(): string {
		let current: LinkedListNode = this.head, //{1}
			string: string = ''; //{2}
		while (current) { //{3}
			string += current.element + (current.next ? 'n' : '');//{4}
			current = current.next; //{5}
		}
		return string; //{6}
	}

	public indexOf(element: any): number {
		let current: LinkedListNode = this.head, //{1}
			index: number = -1;
		while (current) { //{2}
			if (element === current.element) {
				return index; //{3}
			}
			index++; //{4}
			current = current.next; //{5}
		}
		return -1;
	}

	public remove(element: any): LinkedListNode {
		let index: number = this.indexOf(element);
		return this.removeAt(index);
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}

	public size(): number {
		return this.length;
	}

	public getHead(): LinkedListNode {
		return this.head;
	};
}