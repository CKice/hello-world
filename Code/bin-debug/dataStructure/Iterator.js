var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Iterator = (function () {
    function Iterator(n) {
        this.i = n;
        this.a = [n];
    }
    Iterator.prototype.next = function () {
        return this.a[--this.i];
    };
    Iterator.prototype.hasNext = function () {
        return this.i > 0;
    };
    Iterator.prototype.remove = function () {
    };
    return Iterator;
}());
__reflect(Iterator.prototype, "Iterator");
//# sourceMappingURL=Iterator.js.map