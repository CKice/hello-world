//循环队列
class CircularQueue<T> {

    private data: Array<T>
    private head: number;
    private tail: number;
    private size: number | undefined;;

    /** Initialize your data structure here. Set the size of the queue to be k. */
    public CircularQueue(k: number) {
        this.data = new Array<T>();
        this.head = -1;
        this.tail = -1;
        this.size = k;
    }

    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public enQueue(value: T): boolean {
        if (this.isFull() == true) {
            return false;
        }
        if (this.isEmpty() == true) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.size;
        this.data[this.tail] = value;
        return true;
    }

    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public deQueue(): boolean {
        if (this.isEmpty() == true) {
            return false;
        }
        if (this.head == this.tail) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }

    /** Get the front item from the queue. */
    public Front(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.data[this.head];
    }

    /** Get the last item from the queue. */
    public Rear(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.data[this.tail];
    }

    /** Checks whether the circular queue is empty or not. */
    public isEmpty(): boolean {
        return this.head == -1;
    }

    /** Checks whether the circular queue is full or not. */
    public isFull(): boolean {
        return ((this.tail + 1) % this.size) == this.head;
    }
}
