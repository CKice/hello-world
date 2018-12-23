class MathUtil {

	public constructor() {
	}

	//以base为底num的对数
	public static log(n: number, base: number) {
		return Math.log(n) / Math.log(base);
	}

	//十进制转任意进制
	public static baseConverter(value: number, base: number) {
		let stack = new Stack();
		let rem: number = 0;
		let baseString: string = "";
		while (value > 0) {
			rem = Math.floor(value % base);
			stack.push(rem);
			value = Math.floor(value / base);
		}
		while (!stack.isEmpty()) {
			console.log(baseString)
			baseString += stack.pop().toString();
		}
		return baseString;
	}
}