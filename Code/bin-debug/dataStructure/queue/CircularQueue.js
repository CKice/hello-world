var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//循环队列
var CircularQueue = (function () {
    function CircularQueue() {
    }
    ;
    /** Initialize your data structure here. Set the size of the queue to be k. */
    CircularQueue.prototype.CircularQueue = function (k) {
        this.data = new Array();
        this.head = -1;
        this.tail = -1;
        this.size = k;
    };
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    CircularQueue.prototype.enQueue = function (value) {
        if (this.isFull() == true) {
            return false;
        }
        if (this.isEmpty() == true) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.size;
        this.data[this.tail] = value;
        return true;
    };
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    CircularQueue.prototype.deQueue = function () {
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
    };
    /** Get the front item from the queue. */
    CircularQueue.prototype.Front = function () {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.data[this.head];
    };
    /** Get the last item from the queue. */
    CircularQueue.prototype.Rear = function () {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.data[this.tail];
    };
    /** Checks whether the circular queue is empty or not. */
    CircularQueue.prototype.isEmpty = function () {
        return this.head == -1;
    };
    /** Checks whether the circular queue is full or not. */
    CircularQueue.prototype.isFull = function () {
        return ((this.tail + 1) % this.size) == this.head;
    };
    return CircularQueue;
}());
__reflect(CircularQueue.prototype, "CircularQueue");
//# sourceMappingURL=CircularQueue.js.map