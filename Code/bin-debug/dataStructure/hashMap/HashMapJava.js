var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hashMap;
(function (hashMap) {
    var MAXIMUM_CAPACITY = 16;
    // const loadFactor = 0.75;
    var HashMapJava = (function () {
        function HashMapJava(initialCapacity, loadFactor) {
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
            this.init(); //init方法在HashMap中没有实际实现，不过在其子类如 linkedHashMap中就会有对应实现
        }
        HashMapJava.prototype.init = function () { };
        HashMapJava.prototype.put = function (key, value) {
            //如果table数组为空数组{}，进行数组填充（为table分配实际内存空间），入参为threshold，此时threshold为initialCapacity 默认是1<<4(24=16)
            if (this.table.length == 0) {
                this.initTable(this.threshold);
            }
            //如果key为null，存储位置为table[0]或table[0]的冲突链上
            if (key == null)
                return this.putForNullKey(value);
            var hash = this.hash(key); //对key的hashcode进一步计算，确保散列均匀
            var i = this.indexFor(hash, this.table.length); //获取在table中的实际位置
            for (var e = this.table[i]; e != null; e = e.next) {
                //如果该对应数据已存在，执行覆盖操作。用新value替换旧value，并返回旧value
                var k = void 0;
                if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {
                    var oldValue = e.value;
                    e.value = value;
                    e.recordAccess(this);
                    return oldValue;
                }
            }
            this.modCount++; //保证并发访问时，若HashMap内部结构发生变化，快速响应失败
            this.addEntry(hash, key, value, i); //新增一个entry
            return null;
        };
        HashMapJava.prototype.initTable = function (threshold) {
            Math.min(1, 23);
            var capacity = this.roundUpToPowerOf2(threshold); //capacity一定是2的次幂
            threshold = Math.floor((Math.min(capacity * this.loadFactor, MAXIMUM_CAPACITY + 1))); //此处为threshold赋值，取capacity*loadFactor和MAXIMUM_CAPACITY+1的最小值，capaticy一定不会超过MAXIMUM_CAPACITY，除非loadFactor大于1
            this.table = new Entry[capacity];
            this.initHashSeedAsNeeded(capacity);
        };
        HashMapJava.prototype.initHashSeedAsNeeded = function (capacity) {
        };
        HashMapJava.prototype.roundUpToPowerOf2 = function (threshold) {
            return threshold >= MAXIMUM_CAPACITY ? MAXIMUM_CAPACITY : (threshold > 1) ? (threshold - 1) << 1 : 1;
        };
        HashMapJava.prototype.putForNullKey = function (value) {
            return null;
        };
        HashMapJava.prototype.indexFor = function (hash, length) {
            return 0;
        };
        HashMapJava.prototype.hash = function (key) {
            // let h: = hashSeed;
            // if (0 != h && k instanceof String) {
            //     return sun.misc.Hashing.stringHash32((String) k);
            // }
            // h ^= k.hashCode();
            // h ^= (h >>> 20) ^ (h >>> 12);
            // return h ^ (h >>> 7) ^ (h >>> 4);
            return 0;
        };
        HashMapJava.prototype.addEntry = function (hash, key, value, index) { };
        return HashMapJava;
    }());
    hashMap.HashMapJava = HashMapJava;
    __reflect(HashMapJava.prototype, "hashMap.HashMapJava");
    var LinkedList = (function () {
        function LinkedList() {
        }
        LinkedList.prototype.push = function (key) {
            var node = new Entry(1, 2, 3, null); //构造新的元素节点
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
                return current + "";
            }
            else {
                return null;
            }
        };
        ;
        LinkedList.prototype.insert = function (position, element) {
            if (position > -1 && position <= this.length) {
                var node = new Entry(1, 2, 3, null);
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
                string += ',' + current;
                current = current.next;
            }
            return string;
        };
        ;
        LinkedList.prototype.indexFor = function (element) {
            var current = this.head;
            var index = -1;
            while (current) {
                if (element === current) {
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
    var Entry = (function () {
        function Entry(hash, key, value, next) {
            this.Value = value;
            this.Next = next;
            this.Key = key;
            this.Hash = hash;
        }
        Entry.prototype.hashCode = function () {
            return 0;
        };
        Object.defineProperty(Entry.prototype, "key", {
            get: function () {
                return this.Key;
            },
            set: function (key) {
                this.Key = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entry.prototype, "value", {
            get: function () {
                return this.Value;
            },
            set: function (value) {
                this.Value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entry.prototype, "next", {
            get: function () {
                return this.Next;
            },
            set: function (next) {
                this.Next = next;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entry.prototype, "hash", {
            get: function () {
                return this.Hash;
            },
            set: function (hash) {
                this.Hash = hash;
            },
            enumerable: true,
            configurable: true
        });
        Entry.prototype.recordAccess = function (obj) { };
        return Entry;
    }());
    __reflect(Entry.prototype, "Entry");
})(hashMap || (hashMap = {}));
//# sourceMappingURL=HashMapJava.js.map