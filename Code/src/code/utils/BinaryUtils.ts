/**
 * 二进制运算
 */
class BinaryUtils {
	public constructor() {
	}

	/**
	 * 判断一个正整数 n 是否为 2 的幂次方   t:O(1)
	 */
	public static nIsAPowerOf2(n: number): boolean {
		return (n & (n - 1)) == 0;
	}

	/**
	 *整数 n 二进制中 1 的个数
	 */
	public static numberOf1(n: number): number {
		let count = 0;
		while (n != 0) {
			count++;
			n = (n - 1) & n;
		}
		return count;
	}

	/**
	 *将整数 n 转换为 m,需要改变多少二进制位？
	 */
	public static numberOfNtoM(n: number, m: number): number {
		let count = 0;
		n = n ^ m;
		while (n != 0) {
			count++;
			n = (n - 1) & n;
		}
		return count;
	}

	//////////////////////////////////////////////////////////////////////////////////////
	//
	//      a ^ b ^ b = a 的应用
	//
	//////////////////////////////////////////////////////////////////////////////////////
	/**
	 *数组中，只有一个数出现一次，剩下都出现两次，找出出现一次的数
	 */
	public static onnTimesNumber(arr: number[]) {
		let tmp = arr[0];
		for (let i = 1; i < arr.length; i++) {
			tmp = tmp ^ arr[i];
		}
		return tmp;
	}

}