var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
击鼓传花实现循环队列
*/
var HotPotato = (function () {
    function HotPotato() {
    }
    HotPotato.prototype.hotPotato = function (nameList, num) {
        var queue = new Queue(); // {1}
        for (var i = 0; i < nameList.length; i++) {
            queue.push(nameList[i]); // {2}
        }
        var eliminated = '';
        while (queue.size() > 1) {
            for (var i = 0; i < num; i++) {
                queue.push(queue.shift()); // {3}
            }
            eliminated = queue.shift(); // {4}
            console.log(eliminated + '在击鼓传花游戏中被淘汰。 ');
        }
        return queue.shift(); // {5}
    };
    return HotPotato;
}());
__reflect(HotPotato.prototype, "HotPotato");
//# sourceMappingURL=HotPotato.js.map