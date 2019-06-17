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
/**
 * 日历
 */
var Calendar = (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        var _this = _super.call(this) || this;
        _this.dataProvider = new eui.ArrayCollection();
        _this.skinName = "CalendarSkin";
        return _this;
    }
    Calendar.prototype.showDate = function () {
        var date = new Date();
        var y = ItemDate.y = date.getFullYear();
        var m = ItemDate.m = date.getMonth() + 1;
        var d = ItemDate.d = date.getDate();
        this.dataProvider.source = TimeUtil.getMonthDaysArray(y, m, d, 1);
        console.log(TimeUtil.getMonthDaysArray(y, m, d));
        this.txtDate.text = y + "-" + m + "-" + d;
        this.txtYear.text = y + "";
        this.txtMouth.text = m + "";
        this.txtPre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.txtNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.listDate.itemRenderer = ItemDate;
        this.listDate.dataProvider = this.dataProvider;
    };
    Calendar.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.txtPre:
                //
                break;
            case this.txtNext:
                //
                break;
        }
    };
    Calendar.prototype.updata = function () {
    };
    return Calendar;
}(eui.Component));
__reflect(Calendar.prototype, "Calendar");
//# sourceMappingURL=Calendar.js.map