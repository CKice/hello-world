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
var SeverItem = (function (_super) {
    __extends(SeverItem, _super);
    function SeverItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "SeverItemSkin";
        return _this;
    }
    SeverItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    SeverItem.prototype.dataChanged = function () {
        this.labName.text = this.data.zonename + this.data.gamename;
    };
    return SeverItem;
}(eui.ItemRenderer));
__reflect(SeverItem.prototype, "SeverItem");
//# sourceMappingURL=SeverItem.js.map