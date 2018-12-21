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
 * 登录界面
 */
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView(data, callBack, self) {
        var _this = _super.call(this) || this;
        _this.name = "\u767B\u5F55\u754C\u9762";
        _this.skinName = "LoginSkin";
        _this.callBack = callBack;
        _this.obj = self;
        return _this;
    }
    LoginView.prototype.childrenCreated = function () {
    };
    LoginView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        // this.visible = true;
        this.zoneList = param[0].zonelist;
        this.callBack = param[1];
        this.obj = param[2];
        var obj = this.zoneList[0];
        this.zoneid = obj.zoneid;
        this.labelName.text = obj.gamename + obj.zoneid;
        this.btnNotice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btnSelect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    LoginView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.btnNotice.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btnSelect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    LoginView.prototype.onChange = function (e) {
    };
    LoginView.prototype.changeSever = function (zoneid) {
        this.zoneid = zoneid;
        var zone;
        for (var i = 0; i < this.zoneList.length; i++) {
            zone = this.zoneList[i];
            if (zone.zoneid == zoneid) {
                this.labelName.text = zone.gamename + zoneid;
                return;
            }
        }
    };
    LoginView.prototype.onTap = function (e) {
        switch (e.currentTarget) {
            case this.btnNotice:
                break;
            case this.btnSelect:
                break;
            case this.btnStart:
                this.callBack.call(this.obj, this.zoneid);
                break;
        }
    };
    return LoginView;
}(eui.Component));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map