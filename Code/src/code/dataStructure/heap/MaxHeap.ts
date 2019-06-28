class MaxHeap {
	public constructor() {
	}

	public static fixDown(data: number[], i: number) {
		let parent:number = data[i];
		let parentIndex: number = i;
		let leftChildIndex: number = parentIndex * 2 + 1;
		let rightChildIndex: number = parentIndex * 2 + 2;
		let size: number = data.length;
		let leftChild: number = 0;
		let rightChild: number = null;
		let maxIndex: number = 0
		let max:number = 0;
		while (leftChildIndex < size) {
			if (leftChildIndex < size) leftChild = data[leftChildIndex]
			if (rightChildIndex < size) rightChild = data[rightChildIndex]
			maxIndex = rightChild == null ? leftChildIndex : leftChild > rightChild ? leftChildIndex : rightChildIndex;
			max = data[maxIndex];
			if(max < parent)
			break;
			data[parentIndex] = max;
			data[maxIndex] = parent;
			leftChildIndex = maxIndex * 2 +1;
            rightChildIndex = maxIndex + 1;
		}
		
	}

	// 向上调整，大值往上走,用于增加,往上调整不需要制定最上面的索引，肯定是0
	public static fixUp(data: number[], i: number) {
		let num:number = data[i];
		let child: number = i;
		let parentIndex: number = Math.floor((i - 1) / 2);
		while (child > 0) {
			if (num < data[parentIndex])
				break;
			data[child] = data[parentIndex];
		    data[parentIndex] = num;
			// num = data[parentIndex];
			child = parentIndex;
			parentIndex = Math.floor((parentIndex - 1) / 2);
		}
		// data[child] = num;
		// console.log( "第"+i+"元素排序")
	}

	// 删除,n表示删除元素的索引
	public static delete(data: number[], n: number) {
		data[n] = data[data.length - 1];
		data.pop();
		MaxHeap.fixDown(data, 0);
	}

	// 增加,i表示要增加的数字，n表示增加位置的索引，是堆的最后一个元素
	public static insert(data: number[], num: number) {
		data.push(num);
		MaxHeap.fixUp(data, data.length - 1);
	}

	// 建堆,n表示要建堆的最后一个元素的索引
	public static creat(data: number[], n: number) {
		for (let i:number = 0; i <= n; i++)
			MaxHeap.fixUp(data,i);
	}
}