var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MathUtil = (function () {
    function MathUtil() {
    }
    /**
     * x=logaN，读作以a为底N的对数，其中a叫做对数的底数，N叫做真数
     * @param base 对数的底数
     * @param n    对数的真数
     */
    MathUtil.log = function (base, n) {
        return Math.log(n) / Math.log(base);
    };
    /**
     * 获取min和max之间的随机整数
     * @param min 最小数
     * @param max 最大数
     */
    MathUtil.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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