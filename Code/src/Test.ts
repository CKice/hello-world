class Test {
	private testStr: string[] = ["to", "be", "or", "not", "-", "be", "-", "-", "that", "-", "-", "-", "is"]
	private nums: number[] = [60, 2, 58, 32, 105, 89, 75, 111, 236, 99, 100]
	public constructor() {
		// this.aStar();
	}

	public testListStack() {
		// let que = new ListStack();
		// let str = this.testStr;
		// for (let i = 0; i < str.length; i++) {
		// 	if (str[i] != "-") {
		// 		console.log(str[i]);
		// 		que.push(str[i])
		// 	}
		// 	else if (!que.isEmpty()) console.log("pop元素---" + que.pop())
		// }
		// console.log(que.size + "on queck")
	}

	public testListQueue() {
		// let que = new ListQueue();
		// let str = this.testStr;
		// for (let i = 0; i < str.length; i++) {
		// 	if (str[i] != "-") {
		// 		console.log(str[i]);
		// 		que.push(str[i])
		// 	}
		// 	else if (!que.isEmpty()) console.log("pop元素---" + que.pop())
		// }
		// console.log(que.size + "on queck")
	}

	public three(n: number) {
		let sum: number = 0
		let j: number = 0;
		let k: number = 0;
		let i: number;
		for (i = 0; i < n; i++) {
			for (j = i + 1; j < n; j++) {
				for (k = j + 1; k < n; k++) {
					sum += 1;
				}
			}
		}
		console.log(n * (n - 1) * (n - 2) / 6 + "--------" + sum);
		//三角形
		for (let i: number = 0; i < 5; i++) {
			let str: string = "";
			for (let j: number = 5; j > i; j--) {
				str += " ";
			}
			for (let k: number = 0; k < 2 * i + 1; k++) {
				str += "*";
			}
			console.log(str)
		}
	}

	private aStar() {
		let grid = new AStar();
	}

	public sort() {
		MaxHeap.creat(this.nums, this.nums.length - 1)
		Test.log(this.nums);
		MaxHeap.insert(this.nums, 155)
		Test.log(this.nums);
		MaxHeap.delete(this.nums, 5)
		Test.log(this.nums);
		// let str: string = JSON.stringify([{ 0: "a", 1: "b", 3: "c" }])
		// console.log(str);
		// console.log(JSON.parse(str));
		// HeapTwo.insert(this.nums,10)
		// this.log();
		// HeapTwo.insert(this.nums,323)
		// this.log();
		// HeapTwo.insert(this.nums,10)
		// this.log();
		// HeapTwo.delete(this.nums,0 );
		// this.log();
	}
	public static log(nums: number[]) {
		let e: number = Math.ceil(MathUtil.log(nums.length, 2));
		let n: number = 1;
		let s: string = ""
		for (let j: number = e; j > 0; j--) {
			s += " ";
		}
		for (let i: number = 0; i < nums.length; i++) {
			s = s + nums[i] + " ";
			if (i == Math.pow(2, n) - 2) {
				n += 1;
				e -= 1;
				console.log(s)
				s = ""
				for (let j: number = e; j > 0; j--) {
					s += " ";
				}
				continue;
			}
			if (i == nums.length - 1) console.log(s);
		}
	}

	public tree() {
		// let tree = new AVLTree();
		// // let data = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
		// let data = [1,2,3,4,5]
		// for (let i: number = 0; i < data.length; i++) {
		// 	tree.insert(data[i])
		// }
		// // // tree.removeNode(tree.root,15)
		// // tree.preOrderTraverse();
		// // console.log(tree.arr)
		// // tree.remove(15)
		// // tree.arr = [];
		// tree.preOrderTraverse();
		// console.log(tree.arr)
		// // console.log(tree.depth())
		// // Test.log(tree.arr);
		// console.log(TimeUtil.getDay())
		let nums = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6, 1, 2, 4]
		let nums1 = [11, 7, 30, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6, 1, 2, 4]
		// let nums = [1, 212, 33, 24]
		// SortExample.iteratorQuick(nums, 0, nums.length - 1)

		// console.log(Question.MinIDDC([1, 5, 3, 4], 1))
		// console.log(Question.MinIDDC([1, 2, 6, 5], 1))
		// console.log(Question.MinIDDC([1, 3, 2, 6], 1))
		// console.log(Question.MinIDDC(nums, 1))
		// console.log(Question.MinIDDC(nums1, 1))
		console.log(Question.findUglyNumber(10))
		// console.log(nums);
		// console.log(nums)
	}

	public static testStack(){
		console.log(MathUtil.baseConverter(256,2))
	}
}

