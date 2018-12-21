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
var Sever = (function (_super) {
    __extends(Sever, _super);
    function Sever() {
        var _this = _super.call(this) || this;
        // public list: eui.List;
        _this.tabData = ["最近登录", "21-30区", "11-20区", "01-10区"];
        _this.listData3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        _this.listData2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        _this.listData1 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        _this.listData0 = [20, 14, 68];
        _this.listData = new eui.ArrayCollection();
        _this.name = "\u670D\u52A1\u5668\u5217\u8868";
        _this.skinName = "SeverSkin";
        _this.init();
        return _this;
    }
    Sever.prototype.childrenCreated = function () {
        this.listSever.itemRenderer = SeverItem;
        this.scrollSever.viewport = this.listSever;
        // this.tabSever.itemRenderer = BtnSeverItem;
    };
    Sever.prototype.init = function () {
        this.tabSever.dataProvider = new eui.ArrayCollection(this.tabData);
        // this.list.dataProvider = new eui.ArrayCollection(this.tabData);
        this.tabSever.selectedIndex = 0;
        this.tabSever.addEventListener(egret.TouchEvent.CHANGING, this.onChange, this);
        this.listData.source = this.listData0;
        this.listSever.dataProvider = this.listData;
        this.listSever.addEventListener(egret.TouchEvent.CHANGE, this.onChange, this);
    };
    Sever.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    Sever.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    Sever.prototype.onChange = function (e) {
        switch (e.currentTarget) {
            case this.listSever:
                this.listSever.selectedIndices;
                var item = this.listSever.selectedItem;
                console.log(this.listSever.selectedIndices);
                console.log(this.listSever.selectedIndex);
                console.log(this.listSever.selectedItem);
                console.log(this.listSever.selectedItems);
                break;
            case this.tabSever:
                this.listData.source = this['listData' + this.tabSever.selectedIndex];
                break;
        }
    };
    Sever.prototype.onTap = function (e) {
    };
    return Sever;
}(eui.Component));
__reflect(Sever.prototype, "Sever");
//# sourceMappingURL=Sever.js.map