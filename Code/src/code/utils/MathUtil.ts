class MathUtil {

	public constructor() {
	}

	/**  
	 * x=logaN，读作以a为底N的对数，其中a叫做对数的底数，N叫做真数
	 * @param base 对数的底数
	 * @param n    对数的真数
	 */
	public static log(base: number, n: number) {
		return Math.log(n) / Math.log(base);
	}
	/**
	 * 获取min和max之间的随机整数
	 * @param min 最小数
	 * @param max 最大数
	 */
	public static random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
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