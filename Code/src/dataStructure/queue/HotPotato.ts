/*
击鼓传花实现循环队列
*/
class HotPotato {
    constructor() {
    }

    public hotPotato(nameList: string, num: number) {
        let queue = new Queue<string>(); // {1}
        for (let i = 0; i < nameList.length; i++) {
            // queue.push(nameList[i]); // {2}
        }
        let eliminated = '';
        while (queue.size() > 1) {

            for (let i = 0; i < num; i++) {
                // queue.push(queue.shift()); // {3}
            }
            // eliminated = queue.shift();// {4}
            console.log(eliminated + '在击鼓传花游戏中被淘汰。 ');
        }
        // return queue.shift();// {5}
    }
}