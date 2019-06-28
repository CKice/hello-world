namespace hashMap {
    const MAXIMUM_CAPACITY = 16;
    // const loadFactor = 0.75;
    export class HashMapJava {
        //实际存储的key-value键值对的个数
        // transient letsize;
        size: number;
        //阈值，当table == {}时，该值为初始容量（初始容量默认为16）；当table被填充了，也就是为table分配内存空间后，threshold一般为 capacity*loadFactory。HashMap在进行扩容时需要参考threshold，后面会详细谈到
        threshold: number;
        //负载因子，代表了table的填充度有多少，默认是0.75
        // final float loadFactor;
        loadFactor: number
        //用于快速失败，由于HashMap非线程安全，在对HashMap进行迭代时，如果期间其他线程的参与导致HashMap的结构发生变化了（比如put，remove等操作），需要抛出异常ConcurrentModificationException
        // transient letmodCount;
        modCount: number;

        table: Entry[];
        public constructor(initialCapacity: number, loadFactor: number) {
            //此处对传入的初始容量进行校验，最大不能超过MAXIMUM_CAPACITY = 1<<30(230)
            if (initialCapacity < 0) {
                console.error("Illegal initial capacity: " + initialCapacity);
            }
            if (initialCapacity > MAXIMUM_CAPACITY)
                initialCapacity = MAXIMUM_CAPACITY;

            if (loadFactor <= 0 || Number.NaN == loadFactor) {
                console.error("Illegal load factor: " + loadFactor);
            }
            this.loadFactor = loadFactor;
            this.threshold = initialCapacity;

            this.init();//init方法在HashMap中没有实际实现，不过在其子类如 linkedHashMap中就会有对应实现
        }

        init() { }

        public put(key: any, value: any) {
            //如果table数组为空数组{}，进行数组填充（为table分配实际内存空间），入参为threshold，此时threshold为initialCapacity 默认是1<<4(24=16)
            if (this.table.length == 0) {
                this.initTable(this.threshold);
            }
            //如果key为null，存储位置为table[0]或table[0]的冲突链上
            if (key == null) return this.putForNullKey(value);
            let hash: number = this.hash(key);//对key的hashcode进一步计算，确保散列均匀
            let i: number = this.indexFor(hash, this.table.length);//获取在table中的实际位置
            for (let e: Entry = this.table[i]; e != null; e = e.next) {
                //如果该对应数据已存在，执行覆盖操作。用新value替换旧value，并返回旧value
                let k: Object;
                if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {
                    let oldValue: any = e.value;
                    e.value = value;
                    e.recordAccess(this);
                    return oldValue;
                }
            }
            this.modCount++;//保证并发访问时，若HashMap内部结构发生变化，快速响应失败
            this.addEntry(hash, key, value, i);//新增一个entry
            return null;
        }

        initTable(threshold: number) {
            Math.min(1, 23)
            let capacity: number = this.roundUpToPowerOf2(threshold);//capacity一定是2的次幂
            threshold = Math.floor((Math.min(capacity * this.loadFactor, MAXIMUM_CAPACITY + 1))) //此处为threshold赋值，取capacity*loadFactor和MAXIMUM_CAPACITY+1的最小值，capaticy一定不会超过MAXIMUM_CAPACITY，除非loadFactor大于1
            this.table = new Entry[capacity];
            this.initHashSeedAsNeeded(capacity);
        }

        initHashSeedAsNeeded(capacity: number) {

        }

        roundUpToPowerOf2(threshold: number) {
            return threshold >= MAXIMUM_CAPACITY ? MAXIMUM_CAPACITY : (threshold > 1) ? (threshold - 1) << 1 : 1;
        }
        putForNullKey(value: any): Object {
            return null
        }

        indexFor(hash: number, length: number): number {
            return 0;
        }

        hash(key: any): number {
            // let h: = hashSeed;
            // if (0 != h && k instanceof String) {
            //     return sun.misc.Hashing.stringHash32((String) k);
            // }

            // h ^= k.hashCode();

            // h ^= (h >>> 20) ^ (h >>> 12);
            // return h ^ (h >>> 7) ^ (h >>> 4);
            return 0;
        }

        addEntry(hash: number, key: any, value: any, index: number) { }
    }

    class LinkedList {
        public length: number;
        public head: Entry
        constructor() {
        }
        public push(key: any) {
            let node: Entry = new Entry(1, 2, 3, null)　　　　　　　//构造新的元素节点
            let current: Entry;
            if (this.head === null) {　　　　　　　　　　　　　//头节点为空时  当前结点作为头节点
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {　　　　　　　　　　//遍历，直到节点的next为null时停止循环，当前节点为尾节点
                    current = current.next;
                }
                current.next = node;　　　　　　　　　　　　//将尾节点指向新的元素，新元素作为尾节点
            }
            this.length++;　　　　　　　　　　　　　　　　　　　　//更新链表长度
        }
        public pop(position: number): string {
            if (position > -1 && position < length) {
                let current: Entry = this.head;
                let index: number = 0;
                let previous: Entry;
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
                return current + "";
            } else {
                return null;
            }
        };
        public insert(position, element) {
            if (position > -1 && position <= this.length) {　　　　　　　　//校验边界
                let node: Entry = new Entry(1, 2, 3, null, );
                let current: Entry = this.head;
                let index: number = 0;
                let previous: Entry;
                if (position == 0) {　　　　　　　　　　　　　　　　　　　　//作为头节点，将新节点的next指向原有的头节点。
                    node.next = current;
                    this.head = node;　　　　　　　　　　　　　　　　　　　　　　　　//新节点赋值给头节点
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//遍历结束得到当前position所在的current节点，和上一个节点
                    previous.next = node;　　　　　　　　　　　　　　　　　　　　//上一个节点的next指向新节点  新节点指向当前结点，可以参照上图来看
                    node.next = current;
                }
                this.length++;
                return true;
            } else {
                return false;
            }

        };
        public toString(): string {
            let current: Entry = this.head;
            let string: string = '';
            while (current) {
                string += ',' + current;
                current = current.next;
            }
            return string;
        };
        public indexFor(element): number {
            let current: Entry = this.head;
            let index: number = -1;
            while (current) {
                if (element === current) {　　　　　　　　　　　　//从头节点开始遍历
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
        public getHead(): Entry {
            return this.head;
        };
        public isEmpty(): boolean {
            return length == 0;
        }
    }
    class Entry {
        public Key: any;
        public Value: any;
        public Next: Entry;//存储指向下一个Entry的引用，单链表结构
        public Hash: number;//对key的hashcode值进行hash运算后得到的值，存储在Entry，避免重复计算
        public constructor(hash: number, key: any, value: any, next: Entry) {
            this.Value = value;
            this.Next = next;
            this.Key = key;
            this.Hash = hash;
        }

        public hashCode(): number {
            return 0;
        }

        public set key(key: any) {
            this.Key = key
        }

        public get key(): any {
            return this.Key;
        }

        public set value(value: any) {
            this.Value = value
        }

        public get value(): any {
            return this.Value;
        }

        public set next(next: Entry) {
            this.Next = next
        }

        public get next(): Entry {
            return this.Next;
        }

        public set hash(hash: any) {
            this.Hash = hash
        }

        public get hash(): any {
            return this.Hash;
        }
        public recordAccess(obj: any) { }
    }
}