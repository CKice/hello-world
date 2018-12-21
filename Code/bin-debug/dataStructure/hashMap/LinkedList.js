var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hashMap;
(function (hashMap) {
    var LinkedList = (function () {
        function LinkedList() {
        }
        LinkedList.prototype.pop = function (t) {
            t.next;
        };
        return LinkedList;
    }());
    hashMap.LinkedList = LinkedList;
    __reflect(LinkedList.prototype, "hashMap.LinkedList");
    var Entry = (function () {
        function Entry(hash, key, value, next) {
            this.value = value;
            this.next = next;
            this.key = key;
            this.hash = hash;
        }
        Entry.prototype.recordAccess = function (obj) { };
        return Entry;
    }());
    __reflect(Entry.prototype, "Entry");
})(hashMap || (hashMap = {}));
//# sourceMappingURL=LinkedList.js.map