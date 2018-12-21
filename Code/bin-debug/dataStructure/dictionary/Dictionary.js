var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//集合
var Dictionary = (function () {
    function Dictionary() {
        this.items = {};
    }
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value; //{1}
    };
    ;
    Dictionary.prototype.delete = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    ;
    Dictionary.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined;
    };
    ;
    Dictionary.prototype.has = function (key) {
        return key in this.items;
    };
    Dictionary.prototype.values = function () {
        var values = [];
        for (var k in this.items) {
            if (this.items.hasOwnProperty(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    };
    ;
    Dictionary.prototype.clear = function () {
        this.items = {};
    };
    Dictionary.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.items);
    };
    return Dictionary;
}());
__reflect(Dictionary.prototype, "Dictionary", ["IDictionary"]);
//# sourceMappingURL=Dictionary.js.map