class LinkedListNode {
	private _element: any;
	private _next: LinkedListNode;
	private _prev: LinkedListNode
	private _value: any;
	public constructor(element: any, value?: any) {
		this._element = element;
		if (value)
			this._value = value;
		else
			this._value = element
	}

	public get element(): any {
		return this._element;
	}

	public set next(node: LinkedListNode) {
		this._next = node
	}

	public get next(): LinkedListNode {
		return this._next;
	}

	public set prev(node: LinkedListNode) {
		this._prev = node
	}

	public get prev(): LinkedListNode {
		return this._prev;
	}

	public get value(): any {
		return this._value;
	}
}