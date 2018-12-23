var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Test = (function () {
    function Test() {
        this.testStr = ["to", "be", "or", "not", "-", "be", "-", "-", "that", "-", "-", "-", "is"];
        this.nums = [60, 2, 58, 32, 105, 89, 75, 111, 236, 99, 100];
        // this.aStar();
    }
    Test.prototype.testListStack = function () {
        // let que = new ListStack();
        // let str = this.testStr;
        // for (let i = 0; i < str.length; i++) {
        // 	if (str[i] != "-") {
        // 		console.log(str[i]);
        // 		que.push(str[i])
        // 	}
        // 	else if (!que.isEmpty()) console.log("pop元素---" + que.pop())
        // }
        // console.log(que.size + "on queck")
    };
    Test.prototype.testListQueue = function () {
        // let que = new ListQueue();
        // let str = this.testStr;
        // for (let i = 0; i < str.length; i++) {
        // 	if (str[i] != "-") {
        // 		console.log(str[i]);
        // 		que.push(str[i])
        // 	}
        // 	else if (!que.isEmpty()) console.log("pop元素---" + que.pop())
        // }
        // console.log(que.size + "on queck")
    };
    Test.prototype.three = function (n) {
        var sum = 0;
        var j = 0;
        var k = 0;
        var i;
        for (i = 0; i < n; i++) {
            for (j = i + 1; j < n; j++) {
                for (k = j + 1; k < n; k++) {
                    sum += 1;
                }
            }
        }
        console.log(n * (n - 1) * (n - 2) / 6 + "--------" + sum);
        //三角形
        for (var i_1 = 0; i_1 < 5; i_1++) {
            var str = "";
            for (var j_1 = 5; j_1 > i_1; j_1--) {
                str += " ";
            }
            for (var k_1 = 0; k_1 < 2 * i_1 + 1; k_1++) {
                str += "*";
            }
            console.log(str);
        }
    };
    Test.prototype.aStar = function () {
        var grid = new AStar();
    };
    Test.prototype.sort = function () {
        MaxHeap.creat(this.nums, this.nums.length - 1);
        Test.log(this.nums);
        MaxHeap.insert(this.nums, 155);
        Test.log(this.nums);
        MaxHeap.delete(this.nums, 5);
        Test.log(this.nums);
        // let str: string = JSON.stringify([{ 0: "a", 1: "b", 3: "c" }])
        // console.log(str);
        // console.log(JSON.parse(str));
        // HeapTwo.insert(this.nums,10)
        // this.log();
        // HeapTwo.insert(this.nums,323)
        // this.log();
        // HeapTwo.insert(this.nums,10)
        // this.log();
        // HeapTwo.delete(this.nums,0 );
        // this.log();
    };
    Test.log = function (nums) {
        var e = Math.ceil(MathUtil.log(nums.length, 2));
        var n = 1;
        var s = "";
        for (var j = e; j > 0; j--) {
            s += " ";
        }
        for (var i = 0; i < nums.length; i++) {
            s = s + nums[i] + " ";
            if (i == Math.pow(2, n) - 2) {
                n += 1;
                e -= 1;
                console.log(s);
                s = "";
                for (var j = e; j > 0; j--) {
                    s += " ";
                }
                continue;
            }
            if (i == nums.length - 1)
                console.log(s);
        }
    };
    Test.prototype.tree = function () {
        // let tree = new AVLTree();
        // // let data = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
        // let data = [1,2,3,4,5]
        // for (let i: number = 0; i < data.length; i++) {
        // 	tree.insert(data[i])
        // }
        // // // tree.removeNode(tree.root,15)
        // // tree.preOrderTraverse();
        // // console.log(tree.arr)
        // // tree.remove(15)
        // // tree.arr = [];
        // tree.preOrderTraverse();
        // console.log(tree.arr)
        // // console.log(tree.depth())
        // // Test.log(tree.arr);
        // console.log(TimeUtil.getDay())
        var nums = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6, 1, 2, 4];
        var nums1 = [11, 7, 30, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6, 1, 2, 4];
        // let nums = [1, 212, 33, 24]
        // SortExample.iteratorQuick(nums, 0, nums.length - 1)
        // console.log(Question.MinIDDC([1, 5, 3, 4], 1))
        // console.log(Question.MinIDDC([1, 2, 6, 5], 1))
        // console.log(Question.MinIDDC([1, 3, 2, 6], 1))
        // console.log(Question.MinIDDC(nums, 1))
        // console.log(Question.MinIDDC(nums1, 1))
        console.log(Question.findUglyNumber(10));
        // console.log(nums);
        // console.log(nums)
    };
    Test.testStack = function () {
        console.log(MathUtil.baseConverter(256, 2));
    };
    return Test;
}());
__reflect(Test.prototype, "Test");
//# sourceMappingURL=Test.js.map