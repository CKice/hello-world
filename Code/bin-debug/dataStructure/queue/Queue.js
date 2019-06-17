var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Queue = (function () {
    function Queue(capacity) {
        this.elements = new Array();
        this._size = capacity;
    }
    Queue.prototype.push = function (o) {
        // if (o == null) {
        //     return false;
        // }
        //如果传递了size参数就设置了队列的大小
        if (this._size != undefined && !isNaN(this._size)) {
            if (this.elements.length == this._size) {
                this.elements.pop();
            }
        }
        this.elements.push(o);
        // return true;
    };
    Queue.prototype.head = function () {
        return this.elements[0];
    };
    Queue.prototype.shift = function () {
        return this.elements.shift();
    };
    Queue.prototype.size = function () {
        return this.elements.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    Queue.prototype.clear = function () {
        delete this.elements;
        this.elements = new Array();
    };
    return Queue;
}());
__reflect(Queue.prototype, "Queue", ["IQueue"]);
//# sourceMappingURL=Queue.js.map