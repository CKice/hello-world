var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Heap = (function () {
    function Heap(arr) {
        this.heap = [];
        this.heap = arr;
    }
    Heap.min = function (arrarr) {
    };
    Heap.max = function (arrarr) {
    };
    Heap.prototype.left = function (i) {
        return (i + 1) * 2 - 1;
    };
    Heap.prototype.right = function (i) {
        return (i + 1) * 2;
    };
    Heap.prototype.parent = function (i) {
        // i为根结点
        if (i == 0) {
            return -1;
        }
        return (i - 1) / 2;
    };
    Heap.prototype.push = function (value) {
        if (this.heap.length == 0)
            this.heap[0] = undefined; //数组下标为0的位置不放元素
        this.heap.push(value);
        //开始上升操作 
        // heapUp2(this.heap, this.heap.size() - 1); 
        Heap.heapUp(this.heap, this.heap.length - 1);
    };
    Heap.heapUp = function (heap, index) {
        //注意由于数值是从下标为1开始，当index = 1的时候，已经是根节点了 
        if (index > 1) {
            //求出父亲的节点 
            var parent_1 = index / 2;
            //获取相应位置的数值 
            var parentValue = heap[parent_1];
            var indexValue = heap[index];
            //如果父亲节点比index的数值小，就交换二者的数值 
            if (parentValue < indexValue) {
                //交换数值 
                Heap.swap(heap, parent_1, index);
                //递归调用 
                this.heapUp(heap, parent_1);
            }
        }
    };
    Heap.swap = function (arr, min, i) {
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    };
    return Heap;
}());
__reflect(Heap.prototype, "Heap");
//# sourceMappingURL=Heap.js.map