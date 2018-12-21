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
 * 服务器列表
 */
var SeverView = (function (_super) {
    __extends(SeverView, _super);
    function SeverView() {
        var _this = _super.call(this) || this;
        _this.tabData = [];
        _this.listDataArr = [];
        _this.list_length = 10;
        _this.listData = new eui.ArrayCollection();
        _this.name = "\u670D\u52A1\u5668\u5217\u8868";
        _this.skinName = "SeverSkin";
        return _this;
        // this.open(data);
    }
    SeverView.prototype.childrenCreated = function () {
        this.listSever.itemRenderer = SeverItem;
        this.scrollSever.viewport = this.listSever;
    };
    SeverView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var zoneList = param[0];
        this.callBack = param[1];
        this.obj = param[2];
        var i = 0;
        var btnNum = Math.floor(zoneList.length / this.list_length);
        var name = "";
        var str = "";
        var arr = [];
        var headIndex = 0;
        var endIndex = 0;
        for (var i_1 = 0; i_1 < btnNum; i_1++) {
            headIndex = i_1 * this.list_length;
            endIndex = (i_1 + 1) * this.list_length - 1;
            str = zoneList[headIndex].zonename;
            name = str.split("区")[0] + "-" + zoneList[endIndex].zonename;
            this.tabData.unshift(name);
            for (var j = headIndex; j <= endIndex; j++) {
                arr.push(zoneList[j]);
            }
            this.listDataArr.unshift(arr);
        }
        if (i * this.list_length == zoneList.length) {
            this.tabData.unshift(zoneList[i * this.list_length].zonename);
            this.listDataArr.unshift([zoneList[i * this.list_length]]);
        }
        else {
            headIndex = i * this.list_length;
            endIndex = zoneList.length - 1;
            str = zoneList[headIndex].zonename;
            name = str.split("区")[0] + "-" + zoneList[endIndex].zonename;
            this.tabData.unshift(name);
            for (var j = headIndex; j <= endIndex; j++) {
                arr.push(zoneList[j]);
            }
            this.listDataArr.unshift(arr);
        }
        this.tabData.unshift("最近登录");
        this.listDataArr.unshift([]);
        this.tabSever.dataProvider = new eui.ArrayCollection(this.tabData);
        this.tabSever.selectedIndex = 1;
        this.tabSever.addEventListener(egret.TouchEvent.CHANGING, this.onChange, this);
        this.listData.source = this.listDataArr[1];
        this.listSever.dataProvider = this.listData;
        this.listSever.addEventListener(egret.TouchEvent.CHANGE, this.onChange, this);
        this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    SeverView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.tabSever.removeEventListener(egret.TouchEvent.CHANGING, this.onChange, this);
        this.btnBack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.listSever.dataProvider = null;
        this.tabSever.dataProvider = null;
    };
    SeverView.prototype.onChange = function (e) {
        switch (e.currentTarget) {
            case this.listSever:
                this.callBack.call(this.obj, this.listSever.selectedItem.zoneid);
                console.log('zoneid:*********' + this.listSever.selectedItem.zoneid);
                break;
            case this.tabSever:
                this.listData.source = this.listDataArr[this.tabSever.selectedIndex];
                break;
        }
    };
    SeverView.prototype.onTap = function (e) {
    };
    return SeverView;
}(eui.Component));
__reflect(SeverView.prototype, "SeverView");
//# sourceMappingURL=SeverView.js.map