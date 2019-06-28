class CircularLinkedList {
	private length: number = 0;
	private head: ListNode = null;
	public constructor() {
	}

	public append(element): boolean {
		let node = new ListNode(element),
			current: ListNode;
		if (!this.head) {
			this.head = node;
			node.next = this.head;
		} else {
			current = this.head;
			while (current.next !== this.head) {
				current = current.next;
			}
			current.next = node;
			node.next = this.head;
		};
		this.length++;
		return true;
	}

	public insert(position, element): boolean {
		if (position > -1 && position < this.length) {
			let node: ListNode = new ListNode(element),
				index: number = 0,
				current: ListNode = this.head,
				previous: ListNode;
			if (position === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
			};
			this.length++;
			return true;
		} else {
			return false;
		}
	}

	public removeAt(position): any {
		if (position > -1 && position < this.length) {
			let current = this.head,
				previous,
				index = 0;
			if (position === 0) {
				this.head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			};
			this.length--;
			return current.element;
		} else {
			return null;
		}
	}

	public remove(element): boolean {
		let current = this.head,
			previous,
			indexCheck = 0;
		while (current && indexCheck < this.length) {
			if (current.element === element) {
				if (indexCheck == 0) {
					this.head = current.next;
					this.length--;
					return true;
				} else {
					previous.next = current.next;
					this.length--;
					return true;
				}
			} else {
				previous = current;
				current = current.next;
				indexCheck++;
			}
		}
		return false;
	}
	// public remove    () {
	// 	if (this.length === 0) {
	// 		return false;
	// 	}
	// 	let current = this.head,
	// 		previous,
	// 		indexCheck = 0;
	// 	if (this.length === 1) {
	// 		this.head = null;
	// 		this.length--;
	// 		return current.element;
	// 	}
	// 	while (indexCheck++ < this.length) {
	// 		previous = current;
	// 		current = current.next;
	// 	}
	// 	previous.next = this.head;
	// 	this.length--;
	// 	return current.element;
	// };
	public indexOf(element): number {
		let current = this.head,
			index = 0;
		while (current && index < this.length) {
			if (current.element === element) {
				return index;
			} else {
				index++;
				current = current.next;
			}
		}
		return -1;
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}

	public size(): number {
		return this.length;
	}

	public toString(): string {
		let current = this.head,
			string = '',
			indexCheck = 0;
		while (current && indexCheck < this.length) {
			string += current.element;
			current = current.next;
			indexCheck++;
		}
		return string;
	}
}
