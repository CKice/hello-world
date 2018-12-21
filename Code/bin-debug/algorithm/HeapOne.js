var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HeapOne = (function () {
    function HeapOne() {
    }
    HeapOne.heapSort = function (array) {
        if (array == null || array.length == 1)
            return;
        HeapOne.buildMaxHeap(array); // 第一次排序，构建最大堆，只保证了堆顶元素是数组里最大的
        for (var i = array.length - 1; i >= 1; i--) {
            // 这个是什么意思呢？，经过上面的一些列操作，目前array[0]是当前数组里最大的元素，需要和末尾的元素交换
            // 然后，拿出最大的元素
            HeapOne.swap(array, 0, i);
            // 交换完后，下次遍历的时候，就应该跳过最后一个元素，也就是最大的那个值，然后开始重新构建最大堆
            // 堆的大小就减去1，然后从0的位置开始最大堆
            //            maxHeap(array, i, 0);
            HeapOne.minHeap(array, i, 0);
        }
    };
    // 构建堆
    HeapOne.buildMaxHeap = function (array) {
        if (array == null || array.length == 1)
            return;
        // 堆的公式就是 let root = 2*i, let left = 2*i+1, let right = 2*i+2;
        var cursor = array.length / 2;
        for (var i = cursor; i >= 0; i--) {
            //            maxHeap(array, array.length, i);
            HeapOne.minHeap(array, array.length, i);
        }
    };
    // 最大堆
    HeapOne.maxHeap = function (array, heapSieze, index) {
        var left = index * 2 + 1; // 左子节点
        var right = index * 2 + 2; // 右子节点
        var maxValue = index; // 暂时定在Index的位置就是最大值
        // 如果左子节点的值，比当前最大的值大，就把最大值的位置换成左子节点的位置
        if (left < heapSieze && array[left] > array[maxValue]) {
            maxValue = left;
        }
        // 如果右子节点的值，比当前最大的值大，就把最大值的位置换成右子节点的位置
        if (right < heapSieze && array[right] > array[maxValue]) {
            maxValue = right;
        }
        // 如果不相等，说明啊，这个子节点的值有比自己大的，位置发生了交换了位置
        if (maxValue != index) {
            HeapOne.swap(array, index, maxValue); // 就要交换位置元素
            // 交换完位置后还需要判断子节点是否打破了最大堆的性质。最大堆性质：两个子节点都比父节点小。
            HeapOne.maxHeap(array, heapSieze, maxValue);
        }
    };
    // 最小堆
    HeapOne.minHeap = function (array, heapSieze, index) {
        var left = index * 2 + 1; // 左子节点
        var right = index * 2 + 2; // 右子节点
        var maxValue = index; // 暂时定在Index的位置就是最小值
        // 如果左子节点的值，比当前最小的值小，就把最小值的位置换成左子节点的位置
        if (left < heapSieze && array[left] < array[maxValue]) {
            maxValue = left;
        }
        //  如果右子节点的值，比当前最小的值小，就把最小值的位置换成左子节点的位置
        if (right < heapSieze && array[right] < array[maxValue]) {
            maxValue = right;
        }
        // 如果不相等，说明啊，这个子节点的值有比自己小的，位置发生了交换了位置
        if (maxValue != index) {
            HeapOne.swap(array, index, maxValue); // 就要交换位置元素
            // 交换完位置后还需要判断子节点是否打破了最小堆的性质。最小性质：两个子节点都比父节点大。
            HeapOne.minHeap(array, heapSieze, maxValue);
        }
    };
    // 数组元素交换
    HeapOne.swap = function (array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };
    return HeapOne;
}());
__reflect(HeapOne.prototype, "HeapOne");
//# sourceMappingURL=HeapOne.js.map