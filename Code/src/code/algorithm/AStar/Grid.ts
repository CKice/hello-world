class Grid extends egret.Sprite{
	private _startANode: ANode;//开始节点
	private _endANode: ANode;//目标节点
	private _ANodes: Array<Array<ANode>>;//节点数组
	private _numCols: number;//列数
	private _numRows: number;//行数
	public constructor(numCols: number, numRows: number) {
		super();
		this._numCols = numCols;
		this._numRows = numRows;
		this._ANodes = new Array<Array<ANode>>();
		for (let i: number = 0; i < this._numCols; i++) {
			this._ANodes[i] = new Array<ANode>();
			for (let j: number = 0; j < this._numRows; j++) {
				this._ANodes[i][j] = new ANode(i, j);
			}
		}
	}
	public getNode(x: number, y: number): ANode {
		return this._ANodes[x][y] as ANode;
	}


	public setEndNode(x: number, y: number): void {
		this._endANode = this._ANodes[x][y] as ANode;
	}


	public setStartNode(x: number, y: number): void {
		this._startANode = this._ANodes[x][y] as ANode;
	}


	public setWalkable(x: number, y: number, value: Boolean): void {
		this._ANodes[x][y].walkable = value;
	}


	public get endNode(): ANode {
		return this._endANode;
	}


	public get numCols(): number {
		return this._numCols;
	}


	public get numRows(): number {
		return this._numRows;
	}


	public get startNode(): ANode {
		return this._startANode;
	}
}
