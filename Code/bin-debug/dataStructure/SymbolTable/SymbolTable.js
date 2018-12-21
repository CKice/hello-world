var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SymbolTable = (function () {
    function SymbolTable() {
    }
    SymbolTable.prototype.put = function (key, value) {
    };
    SymbolTable.prototype.get = function (key) {
        return "";
    };
    SymbolTable.prototype.delete = function (key) {
        this.put(key, null);
    };
    SymbolTable.prototype.contains = function (key) {
        return this.get(key) != null;
    };
    SymbolTable.prototype.isEmpty = function () {
        return this.Size == 0;
    };
    SymbolTable.prototype.size = function () {
        return this.Size;
    };
    SymbolTable.prototype.keys = function () {
        return this.Keys;
    };
    return SymbolTable;
}());
__reflect(SymbolTable.prototype, "SymbolTable", ["ISymbolTable"]);
//# sourceMappingURL=SymbolTable.js.map