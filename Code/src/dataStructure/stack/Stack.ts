interface IStack<T> {
	push(o: T)//添加一个（或几个）新元素到栈顶。
	pop()//移除栈顶的元素，同时返回被移除的元素。
	peek(): T//返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
	isEmpty(): boolean//如果栈里没有任何元素就返回true，否则返回false。
	clear() //移除栈里的所有元素。
	size() //返回栈里的元素个数。这个方法和数组的length属性很类似。
}
const CAPACITY: number = 10;

class Stack<T> implements IStack<T> {

	private elements: Array<T>;
	private _size: number;

	public constructor(capacity: number = CAPACITY) {
		this.elements = new Array<T>(capacity);
		this._size = 0;
	}

	public push(o: T) {
		var len = this.elements.length;
		if (this._size >= len) {
			let temp = new Array<T>(len);
			this.elements = this.elements.concat(temp);
		}
		this.elements[this._size++] = o;
	}

	public pop(): T {
		return this.elements[--this._size];
	}

	public peek(): T {
		return this.elements[this._size - 1];
	}

	public size(): number {
		return this._size;
	}

	public isEmpty(): boolean {
		return this._size == 0;
	}

	public clear(capacity: number = CAPACITY) {
		delete this.elements;
		this.elements = new Array(capacity);
		this._size = 0;
	}
}
