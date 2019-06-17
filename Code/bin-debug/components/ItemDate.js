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
var ItemDate = (function (_super) {
    __extends(ItemDate, _super);
    function ItemDate() {
        var _this = _super.call(this) || this;
        _this.skinName = "ItemDateSkin";
        return _this;
    }
    ItemDate.prototype.dataChanged = function () {
        if (!this.data.isThisMonth) {
            this.currentState = "disabled";
        }
        // else if (this.data.dayNum = ItemDate.d && ItemDate.m == new Date().getMonth() && ItemDate.y == new Date().getFullYear()) {
        // 	console.log(this.data.dayNum = ItemDate.d)
        // 	console.log(ItemDate.m == new Date().getMonth())
        // 	console.log(ItemDate.y == new Date().getFullYear())
        // 	this.currentState = "today";
        // } else {
        // 	this.currentState = "up";
        // }
    };
    return ItemDate;
}(eui.ItemRenderer));
__reflect(ItemDate.prototype, "ItemDate");
//# sourceMappingURL=ItemDate.js.map