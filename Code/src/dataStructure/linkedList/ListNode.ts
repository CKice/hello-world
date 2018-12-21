class ListNode {
	private _name: any;
	private _next: ListNode;
	private _parent: ListNode
	private _value: any
	public constructor(name: any, value?: any) {
		this._name = name;
		// if(0)
		this._value = name;
	}

	public get name(): any {
		return this._name;
	}

	public set next(node: ListNode) {
		this._next = node
	}

	public get next(): ListNode {
		return this._next;
	}

	public set parent(node: ListNode) {
		this._parent = node
	}

	public get parent(): ListNode {
		return this._parent;
	}
}