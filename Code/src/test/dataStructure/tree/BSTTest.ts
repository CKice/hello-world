class BSTTest {
	public constructor() {
		this.test();
	}

	public test() {
		let bst = new BST();
		let bsti = new BSTI();
		for (let i: number = 1; i < 11; i++) {
			let n = MathUtil.random(1, 100);
			bst.insert(n);
			bsti.insert(n);
		}
		console.log(bst.preOrderTraverse())
		console.log(bsti.preOrderTraverse())
		console.log(bst.inOrderTraverse())
		console.log(bsti.inOrderTraverse())
		console.log(bst.postOrderTraverse())
		console.log(bsti.postOrderTraverse())
		console.log(bst.levelTraversal())
		console.log(bsti.levelTraversal())
	}
}