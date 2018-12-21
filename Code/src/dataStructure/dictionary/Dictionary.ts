interface IDictionary {
    set(key: any, value: any)//向字典中添加新元素。
    delete(key: any): boolean//通过使用键值来从字典中移除键值对应的数据值。
    has(key: any): any//如果某个键值存在于这个字典中，则返回true，反之则返回false。
    get(key: any): any//通过键值查找特定的数值并返回。
    clear()//将这个字典中的所有元素全部删除。
    size()//返回字典所包含元素的数量。与数组的length属性类似。
    keys()//将字典所包含的所有键名以数组形式返回。
    values()//将字典所包含的所有数值以数组形式返回。
}
//集合
class Dictionary implements IDictionary {
    private items: Object = {};
    public set(key: any, value: any) {
        this.items[key] = value; //{1}
    };

    public delete(key: any): boolean {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };

    public get(key: any): any {
        return this.has(key) ? this.items[key] : undefined;
    };

    public has(key: any): any {
        return key in this.items;
    }

    public values(): Object {
        var values = [];
        for (var k in this.items) {
            if (this.items.hasOwnProperty(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    };
    public clear() {
        this.items = {};
    }
    public size(): number {
        return Object.keys(this.items).length
    }

    public keys(): any[] {
        return Object.keys(this.items)
    }
}
