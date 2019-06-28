class ListNode {
	private _element: any;
	private _next: ListNode;
	private _prev: ListNode
	private _value: any
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

	public set next(node: ListNode) {
		this._next = node
	}

	public get next(): ListNode {
		return this._next;
	}

	public set prev(node: ListNode) {
		this._prev = node
	}

	public get prev(): ListNode {
		return this._prev;
	}

	public get value(): any {
		return this._value;
	}
}