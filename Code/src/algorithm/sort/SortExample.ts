class SortExample {
	
	public constructor() {
	}

	public static swap(arr: number[], min: number, i: number) {
		let temp: number = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}

	public static select(arr: number[]) {
		let n: number = arr.length;
		let min: number;
		for (let i: number = 0; i < n; i++) {
			min = i;
			for (let j: number = i + 1; j < n; j++) {
				if (arr[j] < arr[min]) min = j
			}
			SortExample.swap(arr, min, i);
		}
	}

	public static bubble(arr: number[]) {
		let n: number = arr.length;
		let flag: Boolean
		for (let i: number = 0; i < n; i++) {
			flag = true
			for (let j: number = i + 1; j < n; j++) {
				if (arr[j] < arr[i]) {
					SortExample.swap(arr, j, i); flag = false
				};
			}
			if (flag) break;
		}
	}

	public static insert(arr: number[]) {
		let n: number = arr.length;
		for (let i: number = 1; i < n; i++) {
			for (let j: number = i; j > 0 && arr[j] < arr[j - 1]; j--)
				SortExample.swap(arr, j, j - 1);
		}
	}

	public static shell(arr: number[]) {
		let n: number = arr.length;
		let h: number = 1;
		while (h < n / 3) h = h * 3 + 1
		while (h >= 1) {
			for (let i: number = h; i < n; i++) {
				for (let j: number = i; j >= h && arr[j] < arr[j - h]; j -= h)
					SortExample.swap(arr, j, j - h);
			}
			h = Math.floor(h / 3);
		}
	}

	/*归并*/
	public static merge(arr: number[]) {
		let temp = arr.concat();;//在排序前，先建好一个长度等于原数组长度的临时数组，避免递归中频繁开辟空间
		SortExample.divide(arr, 0, arr.length - 1, temp);
	}
	//分
	private static divide(arr: number[], low: number, high: number, temp: number[]) {
		if (low < high) {
			let mid: number = Math.floor((low + high) / 2);
			SortExample.divide(arr, low, mid, temp);//左边归并排序，使得左子序列有序
			SortExample.divide(arr, mid + 1, high, temp);//右边归并排序，使得右子序列有序
			SortExample.conquer(arr, low, mid, high, temp);//将两个有序子数组合并操作
		}
	}
	//治
	public static conquer(arr: number[], low: number, mid: number, high: number, temp: number[]) {
		let i: number = low;//左序列指针
		let j: number = mid + 1;//右序列指针
		let t: number = 0;//临时数组指针
		while (i <= mid && j <= high) {
			if (arr[i] <= arr[j]) {
				temp[t++] = arr[i++];
			} else {
				temp[t++] = arr[j++];
			}
		}
		while (i <= mid) {//将左边剩余元素填充进temp中
			temp[t++] = arr[i++];
		}
		while (j <= high) {//将右序列剩余元素填充进temp中
			temp[t++] = arr[j++];
		}
		t = 0;
		//将temp中的元素全部拷贝到原数组中
		while (low <= high) {
			arr[low++] = temp[t++];
		}
	}
	//自底向上
	public static mergeBottomUp(arr: number[]) {
		let n = arr.length;
		let temp = arr.concat();
		for (let size: number = 1; size < n; size = 2 * size) {//size子数组大小
			for (let j: number = 0; j < n - size; j += 2 * size) {//j子数组索引
				SortExample.conquer(arr, j, j + size - 1, Math.min(j + 2 * size - 1, n - 1), temp)
			}
		}
	}

	/*46  30  82  90  56  17  95  15        选择46 作为基准值，i = 0， j = 7
　　　　　　　　　　　i = 0                                j = 7
　    15  30  82  90  56  17  95  46        15 < 46， 交换 15 和 46，移动 i， i = 1
　　　　　　　　　　　i = 1                                j = 7
　　　15  30  82  90  56  17  95  46        30 < 46， 不需要交换，移动 i ， i = 2
　　　　　　　　　　　i = 2                                j = 7
　　　15  30  46  90  56  17  95  82        82 > 46， 交换82 和 46，移动 j ， j = 6
                    i = 2                                j = 6
　　　15  30  46  90  56  17  95  82        95 > 46， 不需要交换，移动 j ， j = 5
　　　　　　　　　　　i = 2                                j = 5
　　　15  30  17  90  56  46  95  82       17 < 46， 交换46 和 17，移动 i， i = 3
　　　　　　　　　　　i = 3                                j = 5
　　　15  30  17  46  56  90  95  82       90 > 46， 交换90 和 46，移动 j ， j = 4
　　　　　　　　　　　3 = i                                j = 4
　　　15  30  17  46  56  90  95  82       56 > 46， 不需要交换，移动 j ， j = 3
　　　　　　　　　　　　　　　      i  =  j = 3*/

	//左右元素与基准元素交换
	public static quick(a: number[], p: number, q: number) {
		if (a.length < 10) { SortExample.insert(a); return; } //n < 10 快排比插排慢
		let i: number = p;
		let j: number = q;
		// Math.min(a[0],a[Math.floor(a.length / 2)],a[a.length - 1]);//三数取中
		let temp = a[p];
		while (i < j) {
			// 越过不小于基准值的数据 
			while (a[j] >= temp && j > i) j--;
			if (j > i) {
				a[i] = a[j];
				i++;
				// 越过小于基准值的数据 
				while (a[i] < temp && i < j) i++;
				if (i < j) {
					a[j] = a[i];
					j--;
				}
			}
		}
		a[i] = temp;
		if (p < (i - 1)) SortExample.quick(a, p, i - 1);
		if ((j + 1) < q) SortExample.quick(a, j + 1, q);
	}
    /*46  30  82  90  56  17  95  15        选择46 作为基准值，i = 0， j = 7
　　　　　　　　　　　i = 0                                j = 7
　    46  30  15  90  56  17  95  82        15 < 46，j = 7 ， 46 < 82  i = 2  交换15和82;
　　　　　　　　　　　i = 2                                j = 7
　　　46  30  15  17  56  90  95  82        17 < 46，j = 5 ， 46 < 90  i = 3  交换17和90;
　　　　　　　　　　　i = 3                                j = 5  
　　　17  30  15  46  56  90  95  82        17 < 46 交换46和17 ij相等第一轮交换结束
                    i = 3                                j = 3
　  */
	//左右元素相互交换，当左右元素相等时与基准元素交换
	public static quickOther(a: number[], left: number, right: number) {
		let i: number, j: number, t: number, temp: number;
		if (left > right)
			return;
		temp = a[left]; //temp中存的就是基准数 
		i = left;
		j = right;
		while (i != j) {
			//顺序很重要，要先从右边开始找 
			while (a[j] >= temp && i < j) j--;
			//再找右边的 
			while (a[i] <= temp && i < j) i++;
			//交换两个数在数组中的位置 
			if (i < j) {
				SortExample.swap(a, j, i)
			}
		}
		//最终将基准数归位 
		SortExample.swap(a, i, left)
		SortExample.quickOther(a, left, i - 1);//继续处理左边的，这里是一个递归的过程 
		SortExample.quickOther(a, i + 1, right);//继续处理右边的 ，这里是一个递归的过程 
	}

	public static iteratorQuick(num: number[], left: number, right: number) {
		let list: number[][] = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
		while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
			let now: number[] = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
			if (now[0] >= now[1]) { // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
				continue;
			}
			let i: number = now[0];
			let j: number = now[1];
			let flag: number = now[0]; // 以下与递归方法相同，请参考上面的递归详解
			while (i < j) {
				while (num[j] >= num[flag] && j > flag) j--;
				if (i >= j) {
					break;
				}
				while (num[i] <= num[flag] && i < j) i++;
				let temp: number = num[flag];
				num[flag] = num[j];
				num[j] = num[i];
				num[i] = temp;
				flag = i;
			}
			list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
			list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
		}
	}
}