var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ListNode = (function () {
    function ListNode(name, value) {
        this._name = name;
        // if(0)
        this._value = name;
    }
    Object.defineProperty(ListNode.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (node) {
            this._next = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (node) {
            this._parent = node;
        },
        enumerable: true,
        configurable: true
    });
    return ListNode;
}());
__reflect(ListNode.prototype, "ListNode");
//# sourceMappingURL=ListNode.js.map