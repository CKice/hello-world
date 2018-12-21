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
    return MathUtil;
}());
__reflect(MathUtil.prototype, "MathUtil");
//# sourceMappingURL=MathUtil.js.map