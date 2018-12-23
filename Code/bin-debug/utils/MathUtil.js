var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtil = (function () {
    function MathUtil() {
    }
    //以base为底num的对数
    MathUtil.log = function (n, base) {
        return Math.log(n) / Math.log(base);
    };
    //十进制转任意进制
    MathUtil.baseConverter = function (value, base) {
        var stack = new Stack();
        var rem = 0;
        var baseString = "";
        while (value > 0) {
            rem = Math.floor(value % base);
            stack.push(rem);
            value = Math.floor(value / base);
        }
        while (!stack.isEmpty()) {
            console.log(baseString);
            baseString += stack.pop().toString();
        }
        return baseString;
    };
    return MathUtil;
}());
__reflect(MathUtil.prototype, "MathUtil");
//# sourceMappingURL=MathUtil.js.map