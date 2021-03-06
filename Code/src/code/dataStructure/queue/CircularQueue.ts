//循环队列
class CircularQueue<T>{
    private elements: Array<T>
    private head: number;
    private tail: number;
    private capacity: number | undefined;

    /** Initialize your elements structure here. Set the capacity of the queue to be k. */
    public CircularQueue(capacity: number = CAPACITY) {
        this.elements = new Array<T>();
        this.head = -1;
        this.tail = -1;
        this.capacity = capacity;
    }

    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public in(value: T): boolean {
        if (this.isFull() == true) {
            console.log("队列已满");
            return false;
        }
        if (this.isEmpty() == true) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.elements[this.tail] = value;
        return true;
    }

    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public out(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        if (this.head == this.tail) {
            this.head = -1;
            this.tail = -1;
            return null;
        }
        this.head = (this.head + 1) % this.capacity;
        return null;
    }

    /** Get the front item from the queue. */
    public front(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.elements[this.head];
    }

    /** Get the last item from the queue. */
    public rear(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.elements[this.tail];
    }

    /** Checks whether the circular queue is empty or not. */
    public isEmpty(): boolean {
        return this.head == -1;
    }

    /** Checks whether the circular queue is full or not. */
    public isFull(): boolean {
        return ((this.tail + 1) % this.capacity) == this.head;
    }
}
