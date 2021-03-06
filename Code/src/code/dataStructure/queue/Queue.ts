interface IQueue<T> {
	enQueue(value: T)//向队列尾部添加一个（或多个）新的项。
	deQueue(): T//移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
	// front()//返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
	isEmpty(): boolean//如果队列中不包含任何元素，返回true，否则返回false。
}

class Queue<T> implements IQueue<T>{
	private elements: Array<T>;
	// private _size: number;
	public constructor(capacity: number = CAPACITY) {
		this.elements = new Array<T>(capacity);
	}

	public enQueue(value: T) {
		this.elements.push(value);
	}

	public front(): T {
		return this.elements[0];
	}

	public deQueue(): T {
		return this.elements.shift()
	}
	//返回队列包含的元素个数，与数组的length属性类似。
	public size(): number {
		return this.elements.length;
	}

	public isEmpty(): boolean {
		return this.size() == 0;
	}

	public clear() {
		delete this.elements;
		this.elements = new Array(CAPACITY);
	}

	public print(): string {
		return this.elements.toString();
	}
}
