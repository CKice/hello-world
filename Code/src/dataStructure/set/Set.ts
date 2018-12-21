interface set<T>{
        add(t:T);
        remove(t:T);
        indexOf(t:T):number;
        size():number;
        clear();
        toArray():T[];
}
//集合
class Set<T> implements set<T>{
        private arr:Array<T> = [];

        public add(t:T){
            this.indexOf(t) < 0 && this.arr.push(t);
        }

        public remove(t:T){
            var i = this.indexOf(t);
            if(i >= 0){
                delete this.arr[i];
            }
        }

        public indexOf(t:T):number{
            return this.arr.indexOf(t);
        }

        public size():number{
            return Object.keys(this.arr).length;
        }

        public clear(){
            delete this.arr;
            this.arr = [];
        }

        public toArray():T[]{
            var arr = new Array<T>();
            for(var i = 0; i < this.arr.length; i ++){
                this.arr[i] && arr.push(this.arr[i]);
            }
            return arr;
        }
}
