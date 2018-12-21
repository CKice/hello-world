class Iterator {
	private i:number;
	private a:number[];
	public constructor(n:number) {
		this.i = n
		this.a = [n];
	}

	public next():number{
		return this.a[--this.i];
	}

	public hasNext():boolean{
		return this.i > 0;
	}

	public remove(){

	}
}