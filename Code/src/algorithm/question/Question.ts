class Question {
    constructor() {
    }

    //在一组ID中找到未包含最小ID
    public static MinID(ids: number[], n: number): number {
        let signs: boolean[] = [true];   //可用二进制位来替代Boolean
        let i: number = 0;
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
    }

    public static MinIDDC(ids: number[], n: number): number {
        let list: number[][] = [[0, ids.length - 1]]
        let leftNum: number = 0;
        let rightNum: number = ids.length;
        let flag: number = Math.ceil((leftNum + rightNum) / 2);
        let left: number
        let right: number
        let index: number[];
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
                Sort.swap(ids, left, right)
            }
            if (left == 0) {
                if (ids.indexOf(flag) != -1) { return flag - 1; }
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
                        list.push([left + 1, index[1]])
                    }
                } else if (right == flag) {
                    return flag
                } else {
                    leftNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([left + 1, index[1]])
                }
            } else {
                if (left == right) {
                    rightNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([index[0], left + 1])
                } else {
                    rightNum = flag;
                    flag = Math.ceil((leftNum + rightNum) / 2);
                    list.push([index[0], left - 1])
                }
            }
        }
        return flag;
    }

    /*
    一个数只含有2，3,5三个因子被称为丑数
    @ n:第几个
    */
    public static findUglyNumber(n: number): number {
        let twoQue: Queue<number> = new Queue<number>();
        twoQue.enQueue(2);
        let threeQue: Queue<number> = new Queue<number>();
        threeQue.enQueue(3);
        let fiveQue: Queue<number> = new Queue<number>();
        fiveQue.enQueue(5);
        let ugly: number = 0;
        for (let i = 1; i <= n; i++) {
            if (twoQue.front() < threeQue.front() && twoQue.front() < fiveQue.front()) {
                ugly = twoQue.deQueue();
                console.log(ugly);
                twoQue.enQueue(ugly * 2)
                threeQue.enQueue(ugly * 3)
                fiveQue.enQueue(ugly * 5)
            } else if (threeQue.front() < twoQue.front() && threeQue.front() < fiveQue.front()) {
                ugly = threeQue.deQueue();
                console.log(ugly);
                threeQue.enQueue(ugly * 3)
                fiveQue.enQueue(ugly * 5)
            } else {
                ugly = fiveQue.deQueue();
                console.log(ugly);
                fiveQue.enQueue(ugly * 5)
            }
        }
        return ugly;
    }
}