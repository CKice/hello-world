var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MaxHeap = (function () {
    function MaxHeap() {
    }
    MaxHeap.fixDown = function (data, i) {
        var parent = data[i];
        var parentIndex = i;
        var leftChildIndex = parentIndex * 2 + 1;
        var rightChildIndex = parentIndex * 2 + 2;
        var size = data.length;
        var leftChild = 0;
        var rightChild = null;
        var maxIndex = 0;
        var max = 0;
        while (leftChildIndex < size) {
            if (leftChildIndex < size)
                leftChild = data[leftChildIndex];
            if (rightChildIndex < size)
                rightChild = data[rightChildIndex];
            maxIndex = rightChild == null ? leftChildIndex : leftChild > rightChild ? leftChildIndex : rightChildIndex;
            max = data[maxIndex];
            if (max < parent)
                break;
            data[parentIndex] = max;
            data[maxIndex] = parent;
            leftChildIndex = maxIndex * 2 + 1;
            rightChildIndex = maxIndex + 1;
        }
    };
    // 向上调整，大值往上走,用于增加,往上调整不需要制定最上面的索引，肯定是0
    MaxHeap.fixUp = function (data, i) {
        var num = data[i];
        var child = i;
        var parentIndex = Math.floor((i - 1) / 2);
        while (child > 0) {
            if (num < data[parentIndex])
                break;
            data[child] = data[parentIndex];
            data[parentIndex] = num;
            // num = data[parentIndex];
            child = parentIndex;
            parentIndex = Math.floor((parentIndex - 1) / 2);
        }
        // data[child] = num;
        // console.log( "第"+i+"元素排序")
    };
    // 删除,n表示删除元素的索引
    MaxHeap.delete = function (data, n) {
        data[n] = data[data.length - 1];
        data.pop();
        MaxHeap.fixDown(data, 0);
    };
    // 增加,i表示要增加的数字，n表示增加位置的索引，是堆的最后一个元素
    MaxHeap.insert = function (data, num) {
        data.push(num);
        MaxHeap.fixUp(data, data.length - 1);
    };
    // 建堆,n表示要建堆的最后一个元素的索引
    MaxHeap.creat = function (data, n) {
        for (var i = 0; i <= n; i++)
            MaxHeap.fixUp(data, i);
    };
    return MaxHeap;
}());
__reflect(MaxHeap.prototype, "MaxHeap");
//# sourceMappingURL=MaxHeap.js.map