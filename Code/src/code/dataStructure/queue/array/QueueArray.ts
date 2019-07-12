
class QueueArray<T> implements IQueue<T>{
	private elements: Array<T>;
	private head: number = 0;
	private tail: number = 0;
	public constructor(private capacity: number = CAPACITY) {
		this.elements = new Array<T>(capacity);
	}

	public enQueue(value: T) {
		if (this.isFull()) {
			if (this.tail == this.head) {
				console.log("False OverFlow");
				this.clear();
			} else {
				console.log("True OverFlow");
				let temp = new Array<T>(this.capacity);
				this.elements = this.elements.concat(temp);
				this.capacity += this.capacity;
			}
		}
		this.elements[this.tail++] = value;
	}

	public deQueue(): T {
		if (this.isEmpty()) { console.log("UnderFlow"); return null; }
		else return this.elements[this.head++];
	}

	public getHead(): T {
		return this.elements[this.head];
	}

	//返回队列包含的元素个数
	public size(): number {
		return this.tail - this.head;
	}

	public isEmpty(): boolean {
		return this.head == this.tail;
	}

	public isFull(): boolean {
		return this.tail == this.capacity;
	}

	public clear() {
		delete this.elements;
		this.elements = new Array(this.capacity);
		this.head = 0;
		this.tail = 0;
	}

	public print(): string {
		return this.elements.toString();
	}
}
