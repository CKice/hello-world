var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    /**
     * 值的深拷贝
     * 支持 3种基本类型 boolean,number,string
     * 以及 null,undefined
     * 以及 Array,Object等其他引用类型
     * @param value 待拷贝的值
     */
    Util.deepClone = function (value) {
        var copy;
        //处理3种基本类型，以及null和undefined
        if (value == null || typeof value != "object") {
            return value;
        }
        //处理数组
        if (value instanceof Array) {
            copy = [];
            for (var i = 0, len = value.length; i < len; i++) {
                copy[i] = this.deepClone(value[i]);
            }
            return copy;
        }
        //处理对象
        if (value instanceof Object) {
            copy = {};
            for (var prop in value) {
                if (value.hasOwnProperty(prop)) {
                    copy[prop] = this.deepClone(value[prop]);
                }
            }
            return copy;
        }
        throw new Error("Unable to copy value!Its type isn't supported.");
    };
    /**
     * 字符串转Base64
     * @param str 需转码的字符串
    */
    Util.encode = function (str) {
        // 对字符串进行编码
        var encode = encodeURI(str);
        // 对编码的字符串转化base64
        var base64 = btoa(encode);
        return base64;
    };
    /**
     * Base64转字符串
     * @param str 需解码的Base64
     */
    Util.prototype.decode = function (base64) {
        // 对base64转编码
        var decode = atob(base64);
        // 编码转字符串
        var str = decodeURI(decode);
        return str;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map