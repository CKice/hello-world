class ANode extends egret.Sprite {
	public x: number;
	public y: number;
	public f: number;
	public g: number;
	public h: number;
	public walkable: Boolean = true;//是否可穿越（通常把障碍物节点设置为false）
	public parentNode: ANode;
	public costMultiplier: number = 1.0;//代价因子
	public constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
	}
	public  toString():String{  
    // var fmr:NumberFormat = new NumberFormat();
    // fmr.mask = "#.0";
    return "x=" + this.x.toString() + ",y=" + this.y.toString() + ",g=" + this.g.toFixed(1) + ",h=" + this.h.toFixed(1) + ",f=" + this.f.toFixed(1);
}
}