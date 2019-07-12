/**/
class StackArray<T> implements IStack<T> {
	private top: number = -1 //栈顶元素索引
	private elements: Array<T> //元素存放数组

	public constructor(private capacity: number = CAPACITY) {
		this.elements = new Array<T>(capacity);
	}

	public push(value: T) {
		if (this.isFull()) {
			console.log("OverFlow")
			let temp = new Array<T>(this.capacity);
			this.elements = this.elements.concat(temp);
			this.capacity += this.capacity;
		}
		this.elements[++this.top] = value;
	}

	public pop(): T {
		if (this.isEmpty()) { console.log("UnderFlow"); return null; }
		else return this.elements[this.top--];
	}

	public peek(): T {
		return this.elements[this.top];
	}

	public size(): number {
		return this.top + 1;
	}

	public isEmpty(): boolean {
		return this.top == -1;
	}

	public isFull(): boolean {
		return this.top == this.capacity - 1;
	}

	public clear() {
		delete this.elements;
		this.elements = new Array(this.capacity);
		this.top = -1;
	}
}
