
class Heap {
	private heap: number[] = [];
	public constructor(arr: number[]) {
		this.heap = arr;
	}

	public static min(arrarr: number[]) {
	}

	public static max(arrarr: number[]) {
	}

	private left(i: number): number {
		return (i + 1) * 2 - 1;
	}

	private right(i: number): number {
		return (i + 1) * 2;
	}

	private parent(i: number): number {
		// i为根结点
		if (i == 0) {
			return -1;
		}
		return (i - 1) / 2;
	}

	public push(value: number) {
		if (this.heap.length == 0)
			this.heap[0] = undefined;//数组下标为0的位置不放元素
		this.heap.push(value);
		//开始上升操作 
		// heapUp2(this.heap, this.heap.size() - 1); 
		Heap.heapUp(this.heap, this.heap.length - 1);
	}
	public static heapUp(heap: number[], index: number) {

		//注意由于数值是从下标为1开始，当index = 1的时候，已经是根节点了 
		if (index > 1) {
			//求出父亲的节点 
			let parent: number = index / 2;
			//获取相应位置的数值 
			let parentValue = heap[parent];
			let indexValue = heap[index];
			//如果父亲节点比index的数值小，就交换二者的数值 
			if (parentValue < indexValue) {
				//交换数值 
				Heap.swap(heap, parent, index);
				//递归调用 
				this.heapUp(heap, parent);
			}
		}
	}

	public static swap(arr: number[], min: number, i: number) {
		let temp: number = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
}