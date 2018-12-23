interface IQueue<T> {
    push(o: T)//向队列尾部添加一个（或多个）新的项。
    shift(): T//移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    head()//返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
    isEmpty(): boolean//如果队列中不包含任何元素，返回true，否则返回false。
    size(): number//返回队列包含的元素个数，与数组的length属性类似。
}

class Queue<T> implements IQueue<T>{

    private elements: Array<T>;
    private _size: number | undefined;


    public constructor(capacity?: number) {
        this.elements = new Array<T>();
        this._size = capacity;
    }

    public push(o: T) {
        // if (o == null) {
        //     return false;
        // }
        //如果传递了size参数就设置了队列的大小
        if (this._size != undefined && !isNaN(this._size)) {
            if (this.elements.length == this._size) {
                this.elements.pop();
            }
        }
        this.elements.push(o);
        // return true;
    }

    public head() {
        return this.elements[0];
    }

    public shift(): T {
        return this.elements.shift();
    }

    public size(): number {
        return this.elements.length;
    }

    public isEmpty(): boolean {
        return this.size() == 0;
    }

    public clear() {
        delete this.elements;
        this.elements = new Array<T>();
    }
}