class StackTest {
	public constructor() {
		this.test()
	}

	public test() {
		let randomArr: any[]
		randomArr = [11, 4, 36, 23, 32, 24, 19, 56, 71, 53, 46, 75, 81, 51, 22];
		let stack = new Stack<number>();
		stack.push(11);
		stack.push(4);
		// stack.push(36);
		console.log(stack.pop());
		let stackFlow = new StackArray();
		stackFlow.push(11);
		stackFlow.push(4);
		console.log(stackFlow.pop());
	}
}