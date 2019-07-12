class QueueSolution {
	public constructor() {
	}

	//击鼓传花
	public static hotPotato(nameList: string[], num: number): string {
		let queue = new Queue<string>(); // {1}
		for (let i = 0; i < nameList.length; i++) {
			queue.enQueue(nameList[i]); // {2}
		}
		let eliminated = '';
		while (queue.size() > 1) {
			for (let i = 0; i < num; i++) {
				//每次把队列头部弹出的队员再次插入队列的尾部，行程一个循环队列
				queue.enQueue(queue.deQueue());
			}
			//当循环停止时，即到了指定的传递次数时，弹出队列头部的队员
			eliminated = queue.deQueue();
			console.log(eliminated + '被淘汰');
		}
		return queue.deQueue();
	}

	/*
   一个数只含有2，3,5三个因子被称为丑数
   @ n:第几个
   */
	public static findUglyNumber(n: number): number {
		let twoQue: Queue<number> = new Queue<number>();
		twoQue.enQueue(2);
		let threeQue: Queue<number> = new Queue<number>();
		threeQue.enQueue(3);
		let fiveQue: Queue<number> = new Queue<number>();
		fiveQue.enQueue(5);
		let ugly: number = 0;
		for (let i = 1; i <= n; i++) {
			if (twoQue.front() < threeQue.front() && twoQue.front() < fiveQue.front()) {
				ugly = twoQue.deQueue();
				console.log(ugly);
				twoQue.enQueue(ugly * 2)
				threeQue.enQueue(ugly * 3)
				fiveQue.enQueue(ugly * 5)
			} else if (threeQue.front() < twoQue.front() && threeQue.front() < fiveQue.front()) {
				ugly = threeQue.deQueue();
				console.log(ugly);
				threeQue.enQueue(ugly * 3)
				fiveQue.enQueue(ugly * 5)
			} else {
				ugly = fiveQue.deQueue();
				console.log(ugly);
				fiveQue.enQueue(ugly * 5)
			}
		}
		return ugly;
	}
}