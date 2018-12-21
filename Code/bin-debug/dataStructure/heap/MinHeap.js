var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MinHeap = (function () {
    function MinHeap() {
    }
    MinHeap.fixDown = function (data, i, n) {
        var num = data[i];
        var child = i * 2 + 1;
        while (child <= n) {
            if (child + 1 <= n && data[child + 1] < data[child])
                child++;
            if (num < data[child])
                break;
            data[i] = data[child];
            i = child;
            child = i * 2 + 1;
        }
        data[i] = num;
    };
    // 向上调整，小值往上走,用于增加,往上调整不需要制定最上面的索引，肯定是0
    MinHeap.fixUp = function (data, n) {
        var num = data[n];
        var parent = Math.floor((n - 1) / 2);
        // data[parent] > num是进入循环的基本条件,parent减到0就不会减少了
        // 当n等于0时，parent=0；进入死循环，所以当n==0时，需要跳出循环
        while (data[parent] > num && n != 0) {
            data[n] = data[parent];
            n = parent;
            parent = Math.floor((n - 1) / 2);
        }
        data[n] = num;
    };
    // 删除,n表示删除元素的索引
    MinHeap.delete = function (data, n) {
        data[n] = data[data.length - 1];
        data.pop();
        MinHeap.fixDown(data, 0, data.length - 1);
    };
    // 增加,i表示要增加的数字，n表示增加位置的索引，是堆的最后一个元素
    MinHeap.insert = function (data, num) {
        data.push(num);
        MinHeap.fixUp(data, data.length - 1);
    };
    // 建堆,n表示要建堆的最后一个元素的索引
    MinHeap.creat = function (data, n) {
        for (var i = Math.floor((n - 1) / 2); i >= 0; i--)
            MinHeap.fixDown(data, i, data.length - 1);
    };
    return MinHeap;
}());
__reflect(MinHeap.prototype, "MinHeap");
//# sourceMappingURL=MinHeap.js.map