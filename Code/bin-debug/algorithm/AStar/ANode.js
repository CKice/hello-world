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
var ANode = (function (_super) {
    __extends(ANode, _super);
    function ANode(x, y) {
        var _this = _super.call(this) || this;
        _this.walkable = true; //是否可穿越（通常把障碍物节点设置为false）
        _this.costMultiplier = 1.0; //代价因子
        _this.x = x;
        _this.y = y;
        return _this;
    }
    ANode.prototype.toString = function () {
        // var fmr:NumberFormat = new NumberFormat();
        // fmr.mask = "#.0";
        return "x=" + this.x.toString() + ",y=" + this.y.toString() + ",g=" + this.g.toFixed(1) + ",h=" + this.h.toFixed(1) + ",f=" + this.f.toFixed(1);
    };
    return ANode;
}(egret.Sprite));
__reflect(ANode.prototype, "ANode");
//# sourceMappingURL=ANode.js.map