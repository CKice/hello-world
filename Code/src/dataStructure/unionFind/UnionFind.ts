class UnionFind {
	private _id:number[];
	private _count:number;
	public constructor(n:number) {
		this._count = n;
		this._id = [n];
		for(let i:number = 0; i < n; i++){
			this._id[i] = i;
		}
	}

	public get count():number{
		return this._count;
	}

	public connected(p:number,q:number):boolean{
		return this.find(p) == this.find(q);
	}

	public find(p:number){
		
	}
}