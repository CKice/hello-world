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
var TreeView = (function (_super) {
    __extends(TreeView, _super);
    function TreeView() {
        return _super.call(this) || this;
    }
    TreeView.prototype.draw = function (root, depth) {
        if (root) {
            root.graphics.drawCircle(Math.pow(2, depth - 1) * 15, 0 * 15, 15);
            // if ()
        }
    };
    return TreeView;
}(egret.Sprite));
__reflect(TreeView.prototype, "TreeView");
//# sourceMappingURL=TreeView.js.map