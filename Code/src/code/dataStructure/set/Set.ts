interface ISet {
	add(value) //向集合添加一个新的项。
	delete(value) //从集合移除一个值。
	has(value) //如果值在集合中，返回true，否则返回false。
	clear() //移除集合中的所有项。
	size() //返回集合所包含元素的数量。与数组的length属性类似。
	values() //返回一个包含集合中所有值的数组
}

class Set implements ISet {
	private items: any = {};
	public constructor() {
	}

	public add(value) {
		if (!this.has(value)) {
			this.items[value] = value; //{1}
			return true;
		}
		return false;
	}

	//从集合移除一个值。
	public delete(value) {
		if (this.has(value)) {
			delete this.items[value]; //{2}
			return true;
		}
		return false;
	}

	//如果值在集合中，返回true，否则返回false。
	public has(value) {
		// return value in this.items;
		return this.items.hasOwnProperty(value);
	}

	//移除集合中的所有项。
	public clear() {
		this.items = {};
	}

	//返回集合所包含元素的数量。与数组的length属性类似。
	public size() {
		return Object.keys(this.items).length;
	}

	public values() {
		let values = [];
		for (let key in this.items) { //{7}
			if (this.items.hasOwnProperty(key)) { //{8}
				values.push(this.items[key]);
			}
		}
		return values;
	}

	//并集
	public union(otherSet) {
		let unionSet = new Set(); //{1}
		let values = this.values(); //{2}
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		values = otherSet.values(); //{3}
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		return unionSet;
	}

    //交集
	public intersection = function (otherSet) {
		let intersectionSet = new Set(); //{1}
		let values = this.values();
		for (let i = 0; i < values.length; i++) { //{2}
			if (otherSet.has(values[i])) { //{3}
				intersectionSet.add(values[i]); //{4}
			}
		}
		return intersectionSet;
	}

    //差集
	public difference = function (otherSet) {
		let differenceSet = new Set(); //{1}
		let values = this.values();
		for (let i = 0; i < values.length; i++) { //{2}
			if (!otherSet.has(values[i])) { //{3}
				differenceSet.add(values[i]); //{4}
			}
		}
		return differenceSet;
	};

    //子集
	public subset = function (otherSet) {
		if (this.size() > otherSet.size()) { //{1}
			return false;
		} else {
			let values = this.values();
			for (let i = 0; i < values.length; i++) { //{2}
				if (!otherSet.has(values[i])) { //{3}
					return false; //{4}
				}
			}
			return true; //{5}
		}
	};
}