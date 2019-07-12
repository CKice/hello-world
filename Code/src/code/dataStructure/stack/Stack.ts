interface IStack<T> {
	push(value: T)//添加新元素到栈顶。
	pop(): T//移除栈顶的元素，同时返回被移除的元素。
	peek(): T//返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
	isEmpty(): boolean//如果栈里没有任何元素就返回true，否则返回false。
	isFull(): boolean//如果栈里元素个数大于等于size就返回true，否则返回false。
	clear() //移除栈里的所有元素。
}

class Stack<T> implements IStack<T> {
	private size: number = 0//栈元素个数
	private elements: Array<T> //元素存放数组

	public constructor(capacity: number = CAPACITY) {
		this.elements = new Array<T>(capacity);
	}

	public push(value: T) {
		var len = this.elements.length;
		if (this.size >= len) {
			let temp = new Array<T>(len);
			this.elements = this.elements.concat(temp);
		}
		this.elements[this.size++] = value;
	}

	public pop(): T {
		return this.elements[--this.size];
	}

	public peek(): T {
		return this.elements[this.size - 1];
	}

	// public size(): number {
	// 	return this.size;
	// }

	public isEmpty(): boolean {
		return this.size == 0;
	}

	public isFull(): boolean {
		return false;
		// return this.size == 0;
	}

	public clear(capacity: number = CAPACITY) {
		delete this.elements;
		this.elements = new Array(capacity);
		this.size = 0;
	}
}
