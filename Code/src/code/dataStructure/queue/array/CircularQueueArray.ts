//循环队列
class CircularQueueArray<T>{
    private elements: Array<T>;
    private head: number = -1;
    private tail: number = -1;

    /** Initialize your elements structure here. Set the capacity of the queue to be k. */
    public constructor(private capacity: number = CAPACITY) {
        this.elements = new Array<T>(capacity);
    }

    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public enQueue(value: T) {
        if (this.isFull() == true) {
            console.log("OverFlow");
            let temp = new Array<T>(this.capacity);
            this.elements = this.elements.concat(temp);
            this.capacity += this.capacity;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.elements[this.tail] = value;
        console.log("添加：", value);
    }

    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public deQueue(): T {
        if (this.isEmpty()) { console.log("UnderFlow"); return null; }
        else {
            let t = this.elements[this.head]
            this.head = (this.head + 1) % this.capacity;
            console.log("删除：", t);
            return t;
        }
    }

    /** Get the front item from the queue. */
    public getHead(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.elements[this.head];
    }

    /** Get the last item from the queue. */
    public getTail(): T {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.elements[this.tail - 1];
    }

    /** Checks whether the circular queue is empty or not. */
    public isEmpty(): boolean {
        return this.head == this.tail;
    }

    /** Checks whether the circular queue is full or not. */
    public isFull(): boolean {
        return ((this.tail + 1) % this.capacity) == this.head;
    }
}
