class LinkedList {
    public length: number = 0;
    public head: ListNode = null;
    public constructor() {
    }

    public push(element: string) {
        let node: ListNode = new ListNode(element)　　　　　　　//构造新的元素节点
        let current: ListNode;
        if (this.head === null) {　　　　　　　　　　　　　     //头节点为空时  当前结点作为头节点
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {　　　　　　　　　　        //遍历，直到节点的next为null时停止循环，当前节点为尾节点
                current = current.next;
            }
            current.next = node;　　　　　　　　　　　　      //将尾节点指向新的元素，新元素作为尾节点
        }
        this.length++;　　　　　　　　　　　　　　　　　　　　 //更新链表长度
    }
    public pop(position: number): string {
        if (position > -1 && position < length) {
            let current: ListNode = this.head;
            let index: number = 0;
            let previous: ListNode;
            if (position == 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.name;
        } else {
            return null;
        }
    };
    public insert(position, element) {
        if (position > -1 && position <= this.length) {　　　　　　　　//校验边界
            let node: ListNode = new ListNode(element);
            let current: ListNode = this.head;
            let index: number = 0;
            let previous: ListNode;
            if (position == 0) {　　　　　　　　　　　　　　　　　　　　//作为头节点，将新节点的next指向原有的头节点。
                node.next = current;
                this.head = node;　　　　　　　　　　　　　　　　　　　//新节点赋值给头节点
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }　　　　　　　　　　　　　　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
                previous.next = node;　　　　　　　　　　　　　　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
                node.next = current;
            }
            this.length++;
            return true;
        } else {
            return false;
        }

    };
    public toString(): string {
        let current: ListNode = this.head;
        let string: string = '';
        while (current) {
            string += ',' + current.name;
            current = current.next;
        }
        return string;
    };
    public indexFor(element): number {
        let current: ListNode = this.head;
        let index: number = -1;
        while (current) {
            if (element === current.name) {　　　　　　　　　　　　//从头节点开始遍历
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    public getLength(): number {
        return length;
    };
    public getHead(): ListNode {
        return this.head;
    };
    public isEmpty(): boolean {
        return length == 0;
    }
}