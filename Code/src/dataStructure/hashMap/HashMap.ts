class HashMap {
	private table = [];

	public constructor() {
	}

	public loseloseHashCode = function (key) {
		var hash = 5381; //{1}
		for (var i = 0; i < key.length; i++) { //{2}
			hash = hash * 33 + key.charCodeAt(i); //{3}
		}
		return hash % 1013; //{4}
	};

    /*线性探查:另一种解决冲突的方法是线性探查。当想向表中某个位置加入一个新元素的时候，如果索引
	为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试
	index+2的位置，以此类推。*/
	//链地址解决冲突  
	public put = function (key, value) {
		let position = this.loseloseHashCode(key); //{5}
		if (this.table[position] == undefined) { //{1}
			this.table[position] = new LinkedList();
		}
		this.table[position].append(new ValuePair(key, value));
	};

	public get = function (key) {
		let position = this.table[this.loseloseHashCode(key)];
		if (this.table[position] !== undefined) { //{3}
			//遍历链表来寻找键/值
			let current: ListNode = this.table[position].getHead(); //{4}
			while (current.next) { //{5}
				if (current.element.key === key) { //{6}
					return current.element.value; //{7}
				}
				current = current.next; //{8}
			}
			//检查元素在链表第一个或最后一个节点的情况
			if (current.element.key === key) { //{9}
				return current.element.value;
			}
		}
		return undefined; //{10}
	};

	public remove = function (key) {
		let position = this.loseloseHashCode(key);
		if (this.table[position] !== undefined) {
			let current = this.table[position].getHead();
			while (current.next) {
				if (current.element.key === key) { //{11}
					this.table[position].remove(current.element); //{12}
					if (this.table[position].isEmpty()) { //{13}
						this.table[position] = undefined; //{14}
					}
					return true; //{15}
				}
				current = current.next;
			}
			// 检查是否为第一个或最后一个元素
			if (current.element.key === key) { //{16}
				this.table[position].remove(current.element);
				if (this.table[position].isEmpty()) {
					this.table[position] = undefined;
				}
				return true;
			}
		}
		return false; //{17}
	};
}

class ValuePair {
	public key;
	public value;
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.toString = function () {
			return '[' + this.key + ' - ' + this.value + ']';
		}
	}
};