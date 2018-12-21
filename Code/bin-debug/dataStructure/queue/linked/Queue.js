var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var linked;
(function (linked) {
    var Queue = (function () {
        function Queue(capacity) {
            if (capacity === void 0) { capacity = -1; }
            this._size = 0;
            this._head = null;
            this.tail = null;
            this.capacity = -1;
            this.capacity = capacity;
        }
        Queue.prototype.push = function (o) {
            if (this._head == null) {
                this._head = new ListNode(o);
                this._size = 1;
                return true;
            }
            if (this.capacity == -1) {
                if (this._head.next == null) {
                    this.tail = new ListNode(o);
                    this._head.next = this.tail;
                    this.tail.parent = this._head;
                    this._size += 1;
                }
                else {
                    this.changeTail(o);
                }
            }
            else {
                if (this._size == this.capacity) {
                    var node = this._head;
                    this._head = node.next;
                    this._size -= 1;
                    this.changeTail(o);
                }
                else {
                    this.changeTail(o);
                }
            }
            return true;
        };
        Queue.prototype.changeTail = function (o) {
            var node = this.tail;
            this.tail = new ListNode(o);
            node.next = this.tail;
            this.tail.parent = node;
            this._size += 1;
        };
        Object.defineProperty(Queue.prototype, "head", {
            get: function () {
                return this._head;
                // return this.elements[0];
            },
            enumerable: true,
            configurable: true
        });
        Queue.prototype.shift = function () {
            var node = this._head;
            this._head = node.next;
            this._size -= 1;
            return node;
        };
        Queue.prototype.size = function () {
            return this._size;
        };
        Queue.prototype.empty = function () {
            return this.size() == 0;
        };
        Queue.prototype.clear = function () {
            this._head = null;
            this.tail = null;
        };
        return Queue;
    }());
    __reflect(Queue.prototype, "Queue");
})(linked || (linked = {}));
//# sourceMappingURL=Queue.js.map