var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode(key) {
        var _this = _super.call(this) || this;
        _this.left = null;
        _this.right = null;
        _this.parent = null;
        _this.color = "";
        _this.key = key;
        return _this;
    }
    return TreeNode;
}(egret.Sprite));
__reflect(TreeNode.prototype, "TreeNode");
//# sourceMappingURL=TreeNode.js.map