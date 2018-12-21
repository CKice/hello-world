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
 * 登录公告
 */
var LoginNoticeView = (function (_super) {
    __extends(LoginNoticeView, _super);
    function LoginNoticeView(data, callBack, self) {
        var _this = _super.call(this) || this;
        _this.name = "\u767B\u5F55\u516C\u544A";
        _this.skinName = "LoginNoticeSkin";
        return _this;
        // this.open(null)
    }
    LoginNoticeView.prototype.childrenCreated = function () {
    };
    LoginNoticeView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    LoginNoticeView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    LoginNoticeView.prototype.onTap = function (e) {
    };
    return LoginNoticeView;
}(eui.Component));
__reflect(LoginNoticeView.prototype, "LoginNoticeView");
//# sourceMappingURL=LoginNoticeView.js.map