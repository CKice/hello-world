namespace hashMap {
    export class LinkedList {
        public length: number;
        public head: Entry
        constructor() {
        }
        public pop(t: Entry) {
            t.next
        }
    }
    class Entry {
        public key: any;
        public value: any;
        public next: Entry;//存储指向下一个Entry的引用，单链表结构
        public hash: number;//对key的hashcode值进行hash运算后得到的值，存储在Entry，避免重复计算
        public constructor(hash: number, key: any, value: any, next: Entry) {
            this.value = value;
            this.next = next;
            this.key = key;
            this.hash = hash;
        }
        public recordAccess(obj: any) { }
    }
}