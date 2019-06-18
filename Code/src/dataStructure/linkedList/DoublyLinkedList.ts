interface IDoublyLinkedList {
    append(element: any): boolean
    insert(position: number, element: any): boolean
    removeAt(position: number): ListNode
    remove(element: any): ListNode;
    indexOf(element: number): number;
    isEmpty(): boolean;
    size(): number
    getHead(): any
    toString(): string;
}

class DoublyLinkedList implements IDoublyLinkedList {
    private head: ListNode = null;
    private tail: ListNode = null;
    private length: number = 0;
    public constructor() {

    }
    public append(element: any): boolean {
        let node = new ListNode(element), //{1}
            current: ListNode, //{2}
            previous: ListNode;
        if (this.head === null) { //列表中第一个节点 //{3}
            this.head = node;
            this.tail = node;
        } else {
            current = this.head; //{4}
            //循环列表，直到找到最后一项
            while (current.next) {
                previous = current;
                current = current.next;
            }
            //找到最后一项，将其next赋为node，建立链接
            node.next = current;
            current.prev = node;
            previous.next = node;
            node.prev = previous;
            // current.next = node; //{5}
            // node.prev = current;
            // this.tail = node;
        }
        this.length++; //更新列表的长度 //{6}
        return true;
    }

    public removeAt(position: number): ListNode {
        //检查越界值
        if (position > -1 && position < this.length) {
            let current: ListNode = this.head,
                previous: ListNode,
                index: number = 0;
            //移除第一项
            if (position === 0) {
                this.head = current.next; // {1}
                //如果只有一项，更新tail //新增的
                if (this.length === 1) { // {2}
                    this.tail = null;
                } else {
                    this.head.prev = null; // {3}
                }
            } else if (position === this.length - 1) { //最后一项 //新增的
                current = this.tail; // {4}
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < position) { // {5}
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项链接起来——跳过current
                previous.next = current.next; // {6}
                current.next.prev = previous; //新增的
            }
            length--;
            return current.element;
        } else {
            return null; // {11}
        }
    }

    public insert(position: number, element: any): boolean {
        //检查越界值
        if (position >= 0 && position <= this.length) {
            let node: ListNode = new ListNode(element),
                current: ListNode = this.head,
                previous: ListNode,
                index: number = 0;
            if (position === 0) { //在第一个位置添加
                if (!this.head) { //新增的 {1}
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node; //新增的 {2}
                    this.head = node;
                }
            } else if (position === this.length) { //最后一项 //新增的
                current = this.tail; // {3}
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while (index++ < position) { //{4}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{5}
                previous.next = node;
                current.prev = node; //新增的
                node.prev = previous; //新增的
            }
            this.length++; //更新列表的长度
            return true;
        } else {
            return false; //{6}
        }
    }

    public toString(): string {
        let current: ListNode = this.head, //{1}
            string: string = ''; //{2}
        while (current) { //{3}
            string += current.element + (current.next ? 'n' : '');//{4}
            current = current.next; //{5}
        }
        return string; //{6}
    }

    public indexOf(element: any): number {
        let current: ListNode = this.head, //{1}
            index: number = -1;
        while (current) { //{2}
            if (element === current.element) {
                return index; //{3}
            }
            index++; //{4}
            current = current.next; //{5}
        }
        return -1;
    }

    public remove(element: any): ListNode {
        let index: number = this.indexOf(element);
        return this.removeAt(index);
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public size(): number {
        return this.length;
    }

    public getHead(): any {
        return this.head.element;
    }

    public getTail() {
        return this.tail.element;
    }
}