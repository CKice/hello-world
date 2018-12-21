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
 * z资源进度
 */
var RESProgressView = (function (_super) {
    __extends(RESProgressView, _super);
    function RESProgressView() {
        var _this = _super.call(this) || this;
        _this.name = "\u8D44\u6E90\u8FDB\u5EA6";
        _this.skinName = "RESProgressSkin";
        var str = "<font size= 14 color = 0x00ff00><u>" + _this.labRefresh.text + "</u></font>";
        _this.labRefresh.textFlow = new egret.HtmlTextParser().parser(str);
        return _this;
    }
    RESProgressView.prototype.childrenCreated = function () {
    };
    RESProgressView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.labRefresh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.imgWidth = this.imgProgress.width;
        var str1 = "<font size= 14 color = 0x00ff00><u>" + this.labRefresh.text + "</u></font>";
    };
    RESProgressView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.labRefresh.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    RESProgressView.prototype.changeProgress = function (value) {
        console.log(' this.imgProgress.width' + this.imgProgress.width + " ---" + Math.floor(this.imgWidth));
        this.imgProgress.width = Math.floor(this.imgWidth * value / 100);
        this.labProgress.text = "资源加载中......" + value + "%";
    };
    RESProgressView.prototype.onTap = function (e) {
    };
    return RESProgressView;
}(eui.Component));
__reflect(RESProgressView.prototype, "RESProgressView");
//# sourceMappingURL=RESProgressView.js.map