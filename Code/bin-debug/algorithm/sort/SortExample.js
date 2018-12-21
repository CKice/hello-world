var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SortExample = (function () {
    function SortExample() {
    }
    SortExample.swap = function (arr, min, i) {
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    };
    SortExample.select = function (arr) {
        var n = arr.length;
        var min;
        for (var i = 0; i < n; i++) {
            min = i;
            for (var j = i + 1; j < n; j++) {
                if (arr[j] < arr[min])
                    min = j;
            }
            SortExample.swap(arr, min, i);
        }
    };
    SortExample.bubble = function (arr) {
        var n = arr.length;
        var flag;
        for (var i = 0; i < n; i++) {
            flag = true;
            for (var j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                    SortExample.swap(arr, j, i);
                    flag = false;
                }
                ;
            }
            if (flag)
                break;
        }
    };
    SortExample.insert = function (arr) {
        var n = arr.length;
        for (var i = 1; i < n; i++) {
            for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--)
                SortExample.swap(arr, j, j - 1);
        }
    };
    SortExample.shell = function (arr) {
        var n = arr.length;
        var h = 1;
        while (h < n / 3)
            h = h * 3 + 1;
        while (h >= 1) {
            for (var i = h; i < n; i++) {
                for (var j = i; j >= h && arr[j] < arr[j - h]; j -= h)
                    SortExample.swap(arr, j, j - h);
            }
            h = Math.floor(h / 3);
        }
    };
    /*归并*/
    SortExample.merge = function (arr) {
        var temp = arr.concat();
        ; //在排序前，先建好一个长度等于原数组长度的临时数组，避免递归中频繁开辟空间
        SortExample.divide(arr, 0, arr.length - 1, temp);
    };
    //分
    SortExample.divide = function (arr, low, high, temp) {
        if (low < high) {
            var mid = Math.floor((low + high) / 2);
            SortExample.divide(arr, low, mid, temp); //左边归并排序，使得左子序列有序
            SortExample.divide(arr, mid + 1, high, temp); //右边归并排序，使得右子序列有序
            SortExample.conquer(arr, low, mid, high, temp); //将两个有序子数组合并操作
        }
    };
    //治
    SortExample.conquer = function (arr, low, mid, high, temp) {
        var i = low; //左序列指针
        var j = mid + 1; //右序列指针
        var t = 0; //临时数组指针
        while (i <= mid && j <= high) {
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
        while (j <= high) {
            temp[t++] = arr[j++];
        }
        t = 0;
        //将temp中的元素全部拷贝到原数组中
        while (low <= high) {
            arr[low++] = temp[t++];
        }
    };
    //自底向上
    SortExample.mergeBottomUp = function (arr) {
        var n = arr.length;
        var temp = arr.concat();
        for (var size = 1; size < n; size = 2 * size) {
            for (var j = 0; j < n - size; j += 2 * size) {
                SortExample.conquer(arr, j, j + size - 1, Math.min(j + 2 * size - 1, n - 1), temp);
            }
        }
    };
    /*46  30  82  90  56  17  95  15        选择46 作为基准值，i = 0， j = 7
           i = 0                                j = 7
     15  30  82  90  56  17  95  46        15 < 46， 交换 15 和 46，移动 i， i = 1
           i = 1                                j = 7
   15  30  82  90  56  17  95  46        30 < 46， 不需要交换，移动 i ， i = 2
           i = 2                                j = 7
   15  30  46  90  56  17  95  82        82 > 46， 交换82 和 46，移动 j ， j = 6
                    i = 2                                j = 6
   15  30  46  90  56  17  95  82        95 > 46， 不需要交换，移动 j ， j = 5
           i = 2                                j = 5
   15  30  17  90  56  46  95  82       17 < 46， 交换46 和 17，移动 i， i = 3
           i = 3                                j = 5
   15  30  17  46  56  90  95  82       90 > 46， 交换90 和 46，移动 j ， j = 4
           3 = i                                j = 4
   15  30  17  46  56  90  95  82       56 > 46， 不需要交换，移动 j ， j = 3
                     i  =  j = 3*/
    //左右元素与基准元素交换
    SortExample.quick = function (a, p, q) {
        if (a.length < 10) {
            SortExample.insert(a);
            return;
        } //n < 10 快排比插排慢
        var i = p;
        var j = q;
        // Math.min(a[0],a[Math.floor(a.length / 2)],a[a.length - 1]);//三数取中
        var temp = a[p];
        while (i < j) {
            // 越过不小于基准值的数据 
            while (a[j] >= temp && j > i)
                j--;
            if (j > i) {
                a[i] = a[j];
                i++;
                // 越过小于基准值的数据 
                while (a[i] < temp && i < j)
                    i++;
                if (i < j) {
                    a[j] = a[i];
                    j--;
                }
            }
        }
        a[i] = temp;
        if (p < (i - 1))
            SortExample.quick(a, p, i - 1);
        if ((j + 1) < q)
            SortExample.quick(a, j + 1, q);
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
    //左右元素相互交换，当左右元素相等时与基准元素交换
    SortExample.quickOther = function (a, left, right) {
        var i, j, t, temp;
        if (left > right)
            return;
        temp = a[left]; //temp中存的就是基准数 
        i = left;
        j = right;
        while (i != j) {
            //顺序很重要，要先从右边开始找 
            while (a[j] >= temp && i < j)
                j--;
            //再找右边的 
            while (a[i] <= temp && i < j)
                i++;
            //交换两个数在数组中的位置 
            if (i < j) {
                SortExample.swap(a, j, i);
            }
        }
        //最终将基准数归位 
        SortExample.swap(a, i, left);
        SortExample.quickOther(a, left, i - 1); //继续处理左边的，这里是一个递归的过程 
        SortExample.quickOther(a, i + 1, right); //继续处理右边的 ，这里是一个递归的过程 
    };
    SortExample.iteratorQuick = function (num, left, right) {
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
    return SortExample;
}());
__reflect(SortExample.prototype, "SortExample");
//# sourceMappingURL=SortExample.js.map