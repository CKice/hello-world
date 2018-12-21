var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Question = (function () {
    function Question() {
    }
    //在一组ID中找到未包含最小ID
    Question.MinID = function (ids, n) {
        var signs = [true]; //可用二进制位来替代Boolean
        var i = 0;
        for (; i <= n; i++) {
            signs.push(false);
        }
        for (i = 0; i < ids.length; i++) {
            signs[ids[i]] = true;
        }
        for (i = 0; i < signs.length; i++) {
            if (signs[i] == false)
                return i;
        }
    };
    Question.MinIDDC = function (ids, n) {
        var list = [[0, ids.length - 1]];
        var leftNum = 0;
        var rightNum = ids.length;
        var flag = Math.ceil((leftNum + rightNum) / 2);
        var left;
        var right;
        var index;
        while (list.length > 0) {
            index = list.pop();
            if (index[0] >= index[1]) {
                break;
            }
            left = index[0];
            right = index[1];
            while (left < right) {
                while (ids[right] > flag && right > left) {
                    right--;
                }
                while (ids[left] < flag && right > left) {
                    left++;
                }
                SortExample.swap(ids, left, right);
            }
            if (left == 0) {
                if (ids.indexOf(flag) != -1) {
                    return flag - 1;
                }
                return flag;
            }
            if (left == flag - 1) {
                if (right < flag) {
                    if (ids.indexOf(flag) == -1) {
                        return flag;
                    }
                    else {
                        leftNum = flag;
                        flag = Math.ceil((leftNum + rightNum) / 2);
                        list.push([left + 1, index[1]]);
                    }
                }
                else if (right == flag) {
                    return flag;
                }
                else {
                    leftNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([left + 1, index[1]]);
                }
            }
            else {
                if (left == right) {
                    rightNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([index[0], left + 1]);
                }
                else {
                    rightNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([index[0], left - 1]);
                }
            }
        }
        return flag;
    };
    /*
    一个数只含有2，3,5三个因子被称为丑数
    @ n:第几个
    */
    Question.findUglyNumber = function (n) {
        var twoQue = new Queue();
        twoQue.push(2);
        var threeQue = new Queue();
        threeQue.push(3);
        var fiveQue = new Queue();
        fiveQue.push(5);
        var ugly = 0;
        for (var i = 1; i <= n; i++) {
            if (twoQue.tail < threeQue.tail && twoQue.tail < fiveQue.tail) {
                ugly = twoQue.pop();
                console.log(ugly);
                twoQue.push(ugly * 2);
                threeQue.push(ugly * 3);
                fiveQue.push(ugly * 5);
            }
            else if (threeQue.tail < twoQue.tail && threeQue.tail < fiveQue.tail) {
                ugly = threeQue.pop();
                console.log(ugly);
                // twoQue.push(ugly * 2)
                threeQue.push(ugly * 3);
                fiveQue.push(ugly * 5);
            }
            else {
                ugly = fiveQue.pop();
                console.log(ugly);
                //    twoQue.push(ugly * 2)
                // threeQue.push(ugly * 3)
                fiveQue.push(ugly * 5);
            }
        }
        return ugly;
    };
    return Question;
}());
__reflect(Question.prototype, "Question");
//# sourceMappingURL=Question.js.map