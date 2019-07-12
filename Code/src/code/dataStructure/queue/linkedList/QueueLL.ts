class QueueLL<T>{
    public _size: number = 0;
    public _head: LinkedListNode = null;
    public tail: LinkedListNode = null;
    public capacity: number = -1;
    public constructor(capacity: number = -1) {
        this.capacity = capacity;
    }

    public in(o: T): boolean {
        if (this._head == null) {
            this._head = new LinkedListNode(o);
            this._size = 1;
            return true;
        }
        if (this.capacity == -1) {
            if (this._head.next == null) {
                this.tail = new LinkedListNode(o);
                this._head.next = this.tail;
                // this.tail.parent = this._head;
                this._size += 1;
            } else {
                this.changeTail(o);
            }
        } else {
            if (this._size == this.capacity) {
                let node = this._head;
                this._head = node.next;
                this._size -= 1;
                this.changeTail(o);
            } else {
                this.changeTail(o);
            }
        }
        return true;
    }

    private changeTail(o: T) {
        let node = this.tail;
        this.tail = new LinkedListNode(o);
        node.next = this.tail;
        // this.tail.parent = node;
        this._size += 1;
    }

    public get head() {
        return this._head;
        // return this.elements[0];
    }

    public out(): T {
        let node: LinkedListNode = this._head;
        this._head = node.next;
        this._size -= 1;
        // return node;
        return null;
    }

    public size(): number {
        return this._size
    }

    public isEmpty(): boolean {
        return this.size() == 0;
    }

    public clear() {
        this._head = null;
        this.tail = null;
    }

    public front(): T {
        return null;
    }
}

