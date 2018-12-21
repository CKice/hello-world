var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.push = function (element) {
        var node = new ListNode(element); //构造新的元素节点
        var current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node; //将尾节点指向新的元素，新元素作为尾节点
        }
        this.length++; //更新链表长度
    };
    LinkedList.prototype.pop = function (position) {
        if (position > -1 && position < length) {
            var current = this.head;
            var index = 0;
            var previous = void 0;
            if (position == 0) {
                this.head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.name;
        }
        else {
            return null;
        }
    };
    ;
    LinkedList.prototype.insert = function (position, element) {
        if (position > -1 && position <= this.length) {
            var node = new ListNode(element);
            var current = this.head;
            var index = 0;
            var previous = void 0;
            if (position == 0) {
                node.next = current;
                this.head = node; //新节点赋值给头节点
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                } //遍历结束得到当前position所在的current节点，和上一个节点
                previous.next = node; //上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
                node.next = current;
            }
            this.length++;
            return true;
        }
        else {
            return false;
        }
    };
    ;
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var string = '';
        while (current) {
            string += ',' + current.name;
            current = current.next;
        }
        return string;
    };
    ;
    LinkedList.prototype.indexFor = function (element) {
        var current = this.head;
        var index = -1;
        while (current) {
            if (element === current.name) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    ;
    LinkedList.prototype.getLength = function () {
        return length;
    };
    ;
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    ;
    LinkedList.prototype.isEmpty = function () {
        return length == 0;
    };
    return LinkedList;
}());
__reflect(LinkedList.prototype, "LinkedList");
//# sourceMappingURL=LinkedList.js.map