var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//集合
var Set = (function () {
    function Set() {
        this.arr = [];
    }
    Set.prototype.add = function (t) {
        this.indexOf(t) < 0 && this.arr.push(t);
    };
    Set.prototype.remove = function (t) {
        var i = this.indexOf(t);
        if (i >= 0) {
            delete this.arr[i];
        }
    };
    Set.prototype.indexOf = function (t) {
        return this.arr.indexOf(t);
    };
    Set.prototype.size = function () {
        return Object.keys(this.arr).length;
    };
    Set.prototype.clear = function () {
        delete this.arr;
        this.arr = [];
    };
    Set.prototype.toArray = function () {
        var arr = new Array();
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i] && arr.push(this.arr[i]);
        }
        return arr;
    };
    return Set;
}());
__reflect(Set.prototype, "Set", ["set"]);
//# sourceMappingURL=Set.js.map