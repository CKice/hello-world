var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CAPACITY = 10;
var Stack = (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = CAPACITY; }
        this.elements = new Array(capacity);
        this._size = 0;
    }
    Stack.prototype.push = function (o) {
        var len = this.elements.length;
        if (this._size >= len) {
            var temp = new Array(len);
            this.elements = this.elements.concat(temp);
        }
        this.elements[this._size++] = o;
    };
    Stack.prototype.pop = function () {
        return this.elements[--this._size];
    };
    Stack.prototype.peek = function () {
        return this.elements[this._size - 1];
    };
    Stack.prototype.size = function () {
        return this._size;
    };
    Stack.prototype.empty = function () {
        return this._size == 0;
    };
    Stack.prototype.clear = function (capacity) {
        if (capacity === void 0) { capacity = CAPACITY; }
        delete this.elements;
        this.elements = new Array(capacity);
        this._size = 0;
    };
    return Stack;
}());
__reflect(Stack.prototype, "Stack");
//# sourceMappingURL=Stack.js.map