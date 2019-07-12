class AVLTTest {
	public constructor() {
		this.test();
	}

	public test() {
		let avlt = new AVLT();
		let arr = [99, 1, 34, 56, 23, 67, 78, 9, 45, 684, 35, 678, 234, 89, 90, 24, 672, 1, 1, 4]
		for (let value of arr) {
			avlt.insert(value);
		}
		avlt.levelTraversal();// 67 34 99 9 45 89 678 1 23 35 56 78 90 234 684 4 24 672
		console.log(avlt.arr);

		avlt.root = null;
		for (let i: number = 1; i <= 10; i++) {
			avlt.insert(i * 10);
		}
		avlt.insert(70);
		avlt.insert(50);
		avlt.insert(80);
		avlt.insert(72);
		avlt.insert(90);
		avlt.insert(75);
		avlt.insert(73);
		avlt.insert(74);
		avlt.insert(45);
		// avlt.insert(55);
		// avlt.insert(65);
		avlt.levelTraversal();
		console.log(avlt.arr);//60, 40, 80, 20, 50, 72, 90, 10,30,45,70,74,100,73,75
		avlt.remove(73);
		avlt.levelTraversal();
		console.log(avlt.arr);
		avlt.remove(80);
		avlt.levelTraversal();
		console.log(avlt.arr);
	}
}