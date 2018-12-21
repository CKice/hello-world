var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Queue = (function () {
    function Queue(capacity) {
        this.elements = new Array();
        this._size = capacity;
    }
    Queue.prototype.push = function (o) {
        if (o == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this._size != undefined && !isNaN(this._size)) {
            if (this.elements.length == this._size) {
                this.pop();
            }
        }
        this.elements.unshift(o);
        return true;
    };
    Object.defineProperty(Queue.prototype, "tail", {
        get: function () {
            return this.elements[0];
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.pop = function () {
        return this.elements.pop();
    };
    Queue.prototype.size = function () {
        return this.elements.length;
    };
    Queue.prototype.empty = function () {
        return this.size() == 0;
    };
    Queue.prototype.clear = function () {
        delete this.elements;
        this.elements = new Array();
    };
    return Queue;
}());
__reflect(Queue.prototype, "Queue");
//# sourceMappingURL=Queue.js.map