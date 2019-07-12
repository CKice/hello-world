/*优先队列(最小)*/

class PriorityQueue<T> {
	private elements: Array<QueueElement<T>>;
	public constructor() {
		this.elements = new Array<QueueElement<T>>();
	}

	public in(element: T, priority: number) {
		let queueElement = new QueueElement(element, priority);
		if (this.isEmpty()) {
			//当队列为空时，直接往队列中添加元素
			this.elements.push(queueElement);
		} else {
			let added = false;
			for (let i = 0; i < this.elements.length; i++) {
				if (queueElement.priority < this.elements[i].priority) { // {2}
					this.elements.splice(i, 0, queueElement); // {3}
					added = true;
					break; // {4}
				}
			}
			if (!added) {
				this.elements.push(queueElement); //{5}
			}
		}
	}

	public front(): T {
		return this.elements[0].element;
	}

	public out(): T {
		return this.elements.shift().element;
	}

	public size(): number {
		return this.elements.length;
	}

	public isEmpty(): boolean {
		return this.size() == 0;
	}

	public clear() {
		delete this.elements;
		this.elements = new Array();
	}

	public print(): string {
		return this.elements.toString();
	}
}

class QueueElement<T>{
	public element: T;
	public priority: number;
	constructor(element: T, priority: number) {
		this.element = element;
		this.priority = priority;
	}
}