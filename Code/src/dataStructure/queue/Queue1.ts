interface IQueue<T> {
    enQueue(o: T)//向队列尾部添加一个（或多个）新的项。
    deQueue(): T//移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    front()//返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    isEmpty(): boolean//如果队列中不包含任何元素，返回true，否则返回false。
    size(): number//返回队列包含的元素个数，与数组的length属性类似。
}

class Queue1<T> {
    public _size: number = 0;
    public _front: ListNode = null;
    public tail: ListNode = null;
    public capacity: number = -1;
    public constructor(capacity: number = -1) {
        this.capacity = capacity;
    }

    public enQueue(o: T): boolean {
        if (this._front == null) {
            this._front = new ListNode(o);
            this._size = 1;
            return true;
        }
        if (this.capacity == -1) {
            if (this._front.next == null) {
                this.tail = new ListNode(o);
                this._front.next = this.tail;
                // this.tail.parent = this._front;
                this._size += 1;
            } else {
                this.changeTail(o);
            }
        } else {
            if (this._size == this.capacity) {
                let node = this._front;
                this._front = node.next;
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
        this.tail = new ListNode(o);
        node.next = this.tail;
        // this.tail.parent = node;
        this._size += 1;
    }

    public front(): any {
        return this._front.value;
        // return this.elements[0];
    }

    public deQueue(): any {
        let node: ListNode = this._front;
        this._front = node.next;
        this._size -= 1;
        return node.value
    }

    public size(): number {
        return this._size
    }

    public empty(): boolean {
        return this.size() == 0;
    }

    public clear() {
        this._front = null;
        this.tail = null;
    }
}
