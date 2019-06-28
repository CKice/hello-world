class QueueSolution {
	public constructor() {
	}

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
}