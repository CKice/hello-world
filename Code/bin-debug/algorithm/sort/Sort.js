var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 皆为从小到大
 */
var Sort = (function () {
    function Sort() {
    }
    /**
     * 数组元素交换
     */
    Sort.swap = function (arr, min, i) {
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    };
    /**
     * 冒泡排序 O(n^2)
     * 从左往右冒泡，从第一个元素开始，相邻两元素进行比较，将较大的元素放在右边，使得最大的元素位于末尾
     * 然后从从第二个元素开始，相邻两元素进行比较，将较大的元素放在右边，使得第二大的元素位于末尾前一位
     * 如此循环，直到整个数组排序完成
     */
    Sort.bubble = function (arr) {
        var len = arr.length;
        var flag;
        for (var i = 0; i < len; i++) {
            flag = true;
            for (var j = i; j < len - 1; j++) {
                if (arr[j + 1] < arr[j]) {
                    this.swap(arr, j + 1, j);
                    flag = false;
                }
                ;
            }
            if (flag)
                break;
        }
    };
    /**
     * 选择排序 O(n^2)
     * 首先，找到数组中最小的元素，拎出来，将它和数组的第一个元素交换位置，
     * 第二步，在剩下的元素中继续寻找最小的元素，拎出来，和数组的第二个元素交换位置，
     * 如此循环，直到整个数组排序完成
     */
    Sort.select = function (arr) {
        var len = arr.length;
        var min;
        for (var i = 0; i < len; i++) {
            min = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[min])
                    min = j;
            }
            this.swap(arr, min, i);
        }
    };
    /**
     * 插入排序 max:O(n^2) min:O(n)
     * 从第二个元素开始，将元素与前面的元素比较找到合适的位置插入其中
     */
    Sort.insert = function (arr) {
        var len = arr.length;
        for (var i = 1; i < len; i++) {
            for (var j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1])
                    this.swap(arr, j, j - 1);
                else
                    break;
            }
        }
    };
    /**
     * 希尔排序
     * 加快插入的速度，让数据移动的时候可以实现跳跃移动
     * 当 gap == 1 即为插入排序
     */
    Sort.shell = function (arr) {
        var len = arr.length;
        var gap = 1;
        while (gap < len)
            gap = gap * 3 + 1;
        while (gap >= 1) {
            for (var i = gap; i < len; i++) {
                for (var j = i; j >= gap; j -= gap) {
                    if (arr[j] < arr[j - gap])
                        this.swap(arr, j, j - gap);
                    else
                        break;
                }
            }
            gap = Math.floor(gap / 3);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //      分治法
    //
    //////////////////////////////////////////////////////////////////////////////////////
    /**
     * 归并排序 T:O(nlogn) S:O(1)
     */
    Sort.merge = function (arr) {
        var temp = arr.concat();
        ; //在排序前，先建好一个长度等于原数组长度的临时数组，避免递归中频繁开辟空间
        this.divide(arr, 0, arr.length - 1, temp);
    };
    //分
    Sort.divide = function (arr, left, right, temp) {
        if (left < right) {
            var mid = Math.floor((left + right) / 2);
            this.divide(arr, left, mid, temp); //左边归并排序，使得左子序列有序
            this.divide(arr, mid + 1, right, temp); //右边归并排序，使得右子序列有序
            this.conquer(arr, left, mid, right, temp); //将两个有序子数组合并操作
        }
    };
    //治
    Sort.conquer = function (arr, left, mid, right, temp) {
        var i = left; //左序列指针
        var j = mid + 1; //右序列指针
        var t = 0; //临时数组指针
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[t++] = arr[i++];
            }
            else {
                temp[t++] = arr[j++];
            }
        }
        while (i <= mid) {
            temp[t++] = arr[i++];
        }
        while (j <= right) {
            temp[t++] = arr[j++];
        }
        t = 0;
        //将temp中的元素全部拷贝到原数组中
        while (left <= right) {
            arr[left++] = temp[t++];
        }
    };
    //自底向上
    Sort.mergeBottomToUp = function (arr) {
        var len = arr.length;
        var temp = arr.concat();
        for (var size = 1; size < len; size = 2 * size) {
            for (var j = 0; j < len - size; j += 2 * size) {
                this.conquer(arr, j, j + size - 1, Math.min(j + 2 * size - 1, len - 1), temp);
            }
        }
    };
    /**
     * 快速排序 T:O(nlogn) S:O(1)
     */
    Sort.quick = function (arr) {
        if (arr.length < 10) {
            this.insert(arr);
            return;
        } //len < 10 快排比插排慢
        // let temp = arr.concat();;//在排序前，先建好一个长度等于原数组长度的临时数组，避免递归中频繁开辟空间
        this.LeftRightToMid(arr, 0, arr.length - 1);
    };
    //左右元素与基准元素交换   
    /*
      46  30  82  90  56  17  95  15        选择46 作为基准值，i = 0， j = 7
           i = 0                                j = 7
     15  30  82  90  56  17  95  46        15 < 46， 交换 15 和 46，移动 i， i = 1
           i = 1                                j = 7
   15  30  82  90  56  17  95  46        30 < 46， 不需要交换，移动 i ， i = 2
           i = 2                                j = 7
   15  30  46  90  56  17  95  82        82 > 46， 交换82 和 46，移动 j ， j = 6
                    i = 2                                j = 6
   15  30  46  90  56  17  95  82        95 > 46， 不需要交换，移动 j ， j = 5
           i = 2                                j = 5
   15  30  17  90  56  46  95  82        17 < 46， 交换46 和 17，移动 i， i = 3
           i = 3                                j = 5
   15  30  17  46  56  90  95  82        90 > 46， 交换90 和 46，移动 j ， j = 4
           3 = i                                j = 4
   15  30  17  46  56  90  95  82       56 > 46， 不需要交换，移动 j ， j = 3
                     i  =  j = 3
    */
    Sort.quick1 = function (arr, p, q) {
        var i = p;
        var j = q;
        // Math.min(arr[0],arr[Math.floor(arr.length / 2)],arr[arr.length - 1]);//三数取中
        var temp = arr[p];
        while (i < j) {
            // 越过不小于基准值的数据 
            while (arr[j] >= temp && j > i)
                j--;
            if (j > i) {
                arr[i] = arr[j];
                i++;
                // 越过小于基准值的数据 
                while (arr[i] < temp && i < j)
                    i++;
                if (i < j) {
                    arr[j] = arr[i];
                    j--;
                }
            }
        }
        arr[i] = temp;
        if (p < (i - 1))
            this.quick1(arr, p, i - 1);
        if ((j + 1) < q)
            this.quick1(arr, j + 1, q);
    };
    //比较元素与基准元素交换       单边扫描
    Sort.LeftToRight = function (arr, left, right) {
        var mark = left, i = left + 1, j = right, temp = arr[left]; //temp中存的就是基准数 
        if (left > right)
            return;
        for (i; i <= j; i++) {
            if (arr[i] < temp) {
                //小于基准值 则mark+1，并交换位置。
                mark++;
                this.swap(arr, i, mark);
            }
        }
        //基准值与mark对应元素调换位置
        arr[left] = arr[mark];
        arr[mark] = temp;
        this.LeftToRight(arr, left, mark - 1);
        this.LeftToRight(arr, mark + 1, right);
    };
    /*46  30  82  90  56  17  95  15        选择46 作为基准值，i = 0， j = 7
           i = 0                                j = 7
     46  30  15  90  56  17  95  82        15 < 46，j = 7 ， 46 < 82  i = 2  交换15和82;
           i = 2                                j = 7
   46  30  15  17  56  90  95  82        17 < 46，j = 5 ， 46 < 90  i = 3  交换17和90;
           i = 3                                j = 5
   17  30  15  46  56  90  95  82        17 < 46 交换46和17 ij相等第一轮交换结束
                    i = 3                                j = 3
   */
    //左右元素相互交换，当左右元素相等时与基准元素交换     左右两边向中间靠近(双边扫描)
    Sort.LeftRightToMid = function (arr, left, right) {
        var i, j, temp;
        if (left > right)
            return;
        temp = arr[left]; //temp中存的就是基准数 
        i = left;
        j = right;
        while (i != j) {
            //顺序很重要，要先从右边开始找 
            while (arr[j] >= temp && i < j)
                j--;
            //再找右边的 
            while (arr[i] <= temp && i < j)
                i++;
            //交换两个数在数组中的位置 
            if (i < j) {
                this.swap(arr, j, i);
            }
        }
        //最终将基准数归位 
        this.swap(arr, i, left);
        this.LeftRightToMid(arr, left, i - 1); //继续处理左边的，这里是一个递归的过程 
        this.LeftRightToMid(arr, i + 1, right); //继续处理右边的 ，这里是一个递归的过程 
    };
    Sort.iteratorQuick = function (num, left, right) {
        var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
        while (list.length > 0) {
            var now = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
            if (now[0] >= now[1]) {
                continue;
            }
            var i = now[0];
            var j = now[1];
            var flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
            while (i < j) {
                while (num[j] >= num[flag] && j > flag)
                    j--;
                if (i >= j) {
                    break;
                }
                while (num[i] <= num[flag] && i < j)
                    i++;
                var temp = num[flag];
                num[flag] = num[j];
                num[j] = num[i];
                num[i] = temp;
                flag = i;
            }
            list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
            list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
        }
    };
    return Sort;
}());
__reflect(Sort.prototype, "Sort");
//# sourceMappingURL=Sort.js.map