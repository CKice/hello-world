var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UnionFind = (function () {
    function UnionFind(n) {
        this._count = n;
        this._id = [n];
        for (var i = 0; i < n; i++) {
            this._id[i] = i;
        }
    }
    Object.defineProperty(UnionFind.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    UnionFind.prototype.connected = function (p, q) {
        return this.find(p) == this.find(q);
    };
    UnionFind.prototype.find = function (p) {
    };
    return UnionFind;
}());
__reflect(UnionFind.prototype, "UnionFind");
//# sourceMappingURL=UnionFind.js.map