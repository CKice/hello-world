class RBTTest {
	public constructor() {
		this.test();
	}

	public test() {
		let rbt = new RBTI();
		//算法导论例子
		// let arr = [11, 2, 14, 1, 7, 15, 5, 8]
		// for (let value of arr) {
		// 	rbt.insert(value);
		// }
		// rbt.levelTraversal();
		// rbt.insert(4);
		// rbt.levelTraversal();

		rbt.root = rbt.nil;
		let key: number;
		let randomArr: any[]
		randomArr = [11, 4, 36, 23, 32, 24, 19, 56, 71, 53, 46, 75, 81, 51, 22];


		randomArr.forEach((value) => { rbt.insert(value); })
		rbt.levelTraversal();
		//keys:[32, 11, 56, 4, 23, 46, 75, 19, 24,36,53,71,81,22,51]
		//colors:["black", "black", "black", "black", "red", "red", "black", "black", "black","black","black","red", "red","red", "red",]
		// rbt.remove(11);
		// rbt.levelTraversal();
		//keys:[32, 19, 56, 4, 23, 46, 75, 22, 24,36,53,71,81,51]
		//colors:["black", "black", "black", "black", "red", "red", "black", "black", "black","black","black","red", "red","red",]
		rbt.remove(23);
		rbt.levelTraversal();
	}
}