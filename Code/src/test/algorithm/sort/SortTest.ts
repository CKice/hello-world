class SortTest {

	public constructor() {
		this.test();
	}

	private test() {
		let arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.select(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.bubble(arr);
		console.log(arr);
		// if (1 == 1) { return; }

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.insert(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.shell(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.merge(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.quick(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.heap(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.count(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.bucket(arr);
		console.log(arr);

		arr = [11, 36, 874, 987, 12, 456, 789, 234, 851, 785, 658, 349, 645];
		Sort.radix(arr);
		console.log(arr);
	}

}