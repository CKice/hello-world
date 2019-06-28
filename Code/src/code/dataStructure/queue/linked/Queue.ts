namespace linked {
    class Queue<T> {
        public _size: number = 0;
        public _head: ListNode = null;
        public tail: ListNode = null;
        public capacity: number = -1;
        public constructor(capacity: number = -1) {
            this.capacity = capacity;
        }

        public push(o: T): boolean {
            if (this._head == null) {
                this._head = new ListNode(o);
                this._size = 1;
                return true;
            }
            if (this.capacity == -1) {
                if (this._head.next == null) {
                    this.tail = new ListNode(o);
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
            this.tail = new ListNode(o);
            node.next = this.tail;
            // this.tail.parent = node;
            this._size += 1;
        }

        public get head() {
            return this._head;
            // return this.elements[0];
        }

        public shift(): ListNode {
            let node: ListNode = this._head;
            this._head = node.next;
            this._size -= 1;
            return node
        }

        public size(): number {
            return this._size
        }

        public empty(): boolean {
            return this.size() == 0;
        }

        public clear() {
            this._head = null;
            this.tail = null;
        }
    }
}
