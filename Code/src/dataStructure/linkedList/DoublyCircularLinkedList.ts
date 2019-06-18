class DoublyCircularLinkedList {
	private length: number = 0;
	private head: ListNode = null;
	private tail: ListNode = null;
	public constructor() {
	}

	public append(element): boolean {
		let node: ListNode = new ListNode(element),
			current: ListNode,
			previous: ListNode;
		if (!this.head) {
			this.head = node;
			this.tail = node;
			this.head.prev = this.tail;
			this.tail.next = this.head;
		} else {
			current = this.head;
			while (current.next !== this.head) {
				previous = current;
				current = current.next;
			}
			current.next = node;
			node.next = this.head;
			node.prev = current;
		};
		this.length++;
		return true;
	};

	public insert(position, element): boolean {
		if (position >= 0 && position <= this.length) {
			let node = new ListNode(element),
				index = 0,
				current = this.head,
				previous;
			if (position === 0) {
				if (!this.head) {
					node.next = node;
					node.prev = node;
					this.head = node;
					this.tail = node;
				} else {
					current.prev = node;
					node.next = current;
					this.head = node;
					node.prev = this.tail;
				}
			} else if (position === this.length) {
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
				node.next = this.head;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				current.prev = node;
				node.next = current;
				previous.next = node;
				node.prev = previous;
			}
			this.length++;
			return true;
		} else {
			return false;
		}
	};

	public removeAt(position) {
		if (position > -1 && position < this.length) {
			let current = this.head,
				index = 0,
				previous;
			if (position === 0) {
				current.next.prev = this.tail;
				this.head = current.next;
			} else if (position === this.length - 1) {
				current = this.tail;
				current.prev.next = this.head;
				this.head.prev = current.prev;
				this.tail = current.prev;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		} else {
			return false;
		}
	};

	public remove = function (element) {
		let current = this.head,
			previous,
			indexCheck = 0;
		while (current && indexCheck < this.length) {
			if (current.element === element) {
				if (indexCheck === 0) {
					current.next.prev = this.tail;
					this.head = current.next;
				} else {
					current.next.prev = previous;
					previous.next = current.next;
				}
				this.length--;
				return true;
			}
			previous = current;
			current = current.next;
			indexCheck++;
		}
		return false;
	};

	// public remove = function () {
	// 	if (this.length === 0) {
	// 		return false;
	// 	}

	// 	let current = this.head,
	// 		previous,
	// 		indexCheck = 0;

	// 	if (this.length === 1) {
	// 		this.head = ;  
	// 		this.tail = ;  
	// 		this.length--;
	// 		return current.element;
	// 	}

	// 	while (indexCheck++ < this.length) {
	// 		previous = current;
	// 		current = current.next;
	// 	}

	// 	previous.next = this.head;
	// 	this.tail = previous.next;
	// 	this.length--;
	// 	return current.element;
	// };

	public indexOf = function (element) {
		let current = this.head,
			index = 0;
		while (current && index++ < this.length) {
			if (current.element === element) {
				return index;
			}
			current = current.next;
		}
		return false;
	};

	public toString = function () {
		let current = this.head,
			indexCheck = 0,
			string = '';
		while (current && indexCheck < this.length) {
			string += current.element;
			indexCheck++;
			current = current.next;
		}
		return string;
	};

	public isEmpty = function () {
		return this.length === 0;
	};

	public getHead = function () {
		return this.head;
	};

	public getTail = function () {
		return this.tail;
	};

	public size = function () {
		return this.length;
	};
}  
